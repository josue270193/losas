package edu.uade.server.negocio.impl;

import edu.uade.server.dao.ConsultaDao;
import edu.uade.server.dao.ValorDiagnosticoDao;
import edu.uade.server.dto.*;
import edu.uade.server.entity.*;
import edu.uade.server.mapper.ConsultaMapper;
import edu.uade.server.mapper.RouterCustom;
import edu.uade.server.negocio.ConsultaNegocio;
import net.sf.clipsrules.jni.CLIPSException;
import net.sf.clipsrules.jni.Environment;
import net.sf.clipsrules.jni.FactAddressValue;
import net.sf.clipsrules.jni.PrimitiveValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ConsultaNegocioImpl implements ConsultaNegocio {

    private static final String CLASSPATH = "classpath:";
    private final ResourceLoader resourceLoader;
    private final ConsultaDao consultaDao;
    private final ValorDiagnosticoDao valorDiagnosticoDao;
    private Environment clips;

    @Value("${path.clips}")
    private String[] pathClip;

    @Autowired
    public ConsultaNegocioImpl(@Value("${path.lib}") String pathLib, ConsultaDao consultaDao, ValorDiagnosticoDao valorDiagnosticoDao, ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
        this.consultaDao = consultaDao;
        this.valorDiagnosticoDao = valorDiagnosticoDao;

        System.setProperty("java.library.path", pathLib);
        Field fieldSysPath;
        try {
            fieldSysPath = ClassLoader.class.getDeclaredField("sys_paths");
            fieldSysPath.setAccessible(true);
            fieldSysPath.set(null, null);
        } catch (NoSuchFieldException | SecurityException | IllegalArgumentException | IllegalAccessException e) {
            e.printStackTrace();
        }
    }

    @Override
    public ConsultaDto doConsulta(ConsultaDto consulta) {
        try {
//            Realizo la consulta en CLIPS
            List<String> listaAssert = ConsultaMapper.mapConsulta(consulta);

            RouterCustom router = new RouterCustom("routerCustom");

            clips = new Environment();
            clips.addRouter(router);

            for (String path : pathClip){
                final Resource fileResource = resourceLoader.getResource(CLASSPATH + path);
                clips.load(fileResource.getFile().getAbsolutePath());
            }
            clips.reset();
            for (String eval : listaAssert){
                clips.eval(eval);
            }

            clips.run();
            consulta = evaluarResultado(consulta, clips, router);

//            Guardar en BD
            consulta = guardarConsulta(consulta);

        } catch (Exception e){
            e.printStackTrace();
        }
        return consulta;
    }

    private ConsultaDto evaluarResultado(ConsultaDto consulta, Environment clips, RouterCustom router) {
        DiagnosticoDto diagnosticoDto = new DiagnosticoDto();

        // AGREGOS LAS REGLAS APLICADAS
        List<String> reglasAplicadas = router.getBuffer();
        reglasAplicadas = reglasAplicadas.stream().filter(linea -> !linea.trim().isEmpty()).collect(Collectors.toList());
        consulta.setReglasAplicadas(reglasAplicadas);

        // OBTENEMOS EL RESULTADO
        try {
            String variable = "?f";
            String condicion = "(neq ?f:" + ConsultaMapper.SLOT_RESULTADO + " \"" +  ConsultaMapper.VALOR_SLOT_NO_ESPECIFICA + "\")";
            FactAddressValue fact = clips.findFact(variable, ConsultaMapper.TEMPLATE_DIAGNOSTICO, condicion);
            if (fact != null) {
                PrimitiveValue slotValue = fact.getSlotValue(ConsultaMapper.SLOT_RESULTADO);
                if (slotValue != null) {
                    String valor = (String) slotValue.getValue();
                    if (valor != null && !valor.trim().isEmpty()) {
                        ValorDiagnosticoEntity valorDiagnosticoEntity = valorDiagnosticoDao.findByValorInferenciaLike(valor);
                        diagnosticoDto.setValor(new ValorDiagnosticoDto(valorDiagnosticoEntity));
                    }
                }
            }
        } catch (CLIPSException ignore) {}

        consulta.setDiagnostico(diagnosticoDto);
        return consulta;
    }

    private ConsultaDto guardarConsulta(ConsultaDto consultaDto) {
        ConsultaEntity entity = new ConsultaEntity();

        entity.setParametro(crearEntityConsultaParametro(consultaDto.getParametro()));
        entity.setFechaCreacion(consultaDto.getFechaCreacion());
        entity.setDiagnostico(crearEntityConsulta(consultaDto.getDiagnostico()));
        entity.setReglasAplicadas(consultaDto.getReglasAplicadas().stream().map(Object::toString).collect(Collectors.joining(",")));

        entity = consultaDao.save(entity);

        return new ConsultaDto(entity);
    }

    private DiagnosticoEntity crearEntityConsulta(DiagnosticoDto dto) {
        DiagnosticoEntity entity = null;
        if (dto != null && dto.getValor() != null) {
            entity = new DiagnosticoEntity();
            entity.setValor(crearEntityValorDiagnostico(dto.getValor()));
        }
        return entity;
    }

    private ValorDiagnosticoEntity crearEntityValorDiagnostico(ValorDiagnosticoDto dto) {
        ValorDiagnosticoEntity valorDiagnosticoEntity = new ValorDiagnosticoEntity();
        valorDiagnosticoEntity.setCodigo(dto.getCodigo());
        return valorDiagnosticoEntity;
    }

    private ConsultaParametroEntity crearEntityConsultaParametro(ConsultaParametroDto dto) {
        ConsultaParametroEntity entity = new ConsultaParametroEntity();

        entity.setEvaluacionLosa(crearEntityEvaluacionLosa(dto.getEvaluacionLosa()));
        entity.getEvaluacionFenomenoPatologico().addAll(
            dto.getEvaluacionesFenomenoPatologico()
                .stream()
                .map(this::crearEntityFenomenoPatologico)
                .collect(Collectors.toList())
        );
        entity.getEvaluacionNoDestructiva().addAll(
            dto.getEvaluacionesNoDestructiva()
                .stream()
                .map(this::crearEntityEvaluacionNoDestructiva)
                .collect(Collectors.toList())
        );
        entity.getEvaluacionDestructiva().addAll(
            dto.getEvaluacionesDestructiva()
                .stream()
                .map(this::crearEntityEvaluacionDestructiva)
                .collect(Collectors.toList())
        );

        return entity;
    }

    private EvaluacionDestructivaEntity crearEntityEvaluacionDestructiva(EvaluacionDestructivaDto dto) {
        EvaluacionDestructivaEntity entity = new EvaluacionDestructivaEntity();
        entity.setCumpleNorma(dto.getCumpleNorma());
        entity.setValor(crearEntityValorEvaluacionDestructiva(dto.getValor()));
        return entity;
    }
    private ValorEvaluacionDestructivaEntity crearEntityValorEvaluacionDestructiva(ValorEvaluacionDestructivaDto dto) {
        ValorEvaluacionDestructivaEntity entity = new ValorEvaluacionDestructivaEntity();
        entity.setCodigo(dto.getCodigo());
        return entity;
    }
    private EvaluacionNoDestructivaEntity crearEntityEvaluacionNoDestructiva(EvaluacionNoDestructivaDto dto) {
        EvaluacionNoDestructivaEntity entity = new EvaluacionNoDestructivaEntity();
        entity.setCumpleNorma(dto.getCumpleNorma());
        entity.setColorEvaluacion(dto.getColorEvaluacion());
        entity.setValor(crearEntityValorEvaluacionNoDestructiva(dto.getValor()));
        return entity;
    }
    private ValorEvaluacionNoDestructivaEntity crearEntityValorEvaluacionNoDestructiva(ValorEvaluacionNoDestructivaDto dto) {
        ValorEvaluacionNoDestructivaEntity entity = new ValorEvaluacionNoDestructivaEntity();
        entity.setCodigo(dto.getCodigo());
        return entity;
    }

    private EvaluacionFenomenoPatologicoEntity crearEntityFenomenoPatologico(EvaluacionFenomenoPatologicoDto dto) {
        EvaluacionFenomenoPatologicoEntity entity = new EvaluacionFenomenoPatologicoEntity();
        entity.setCumpleNorma(dto.getCumpleNorma());
        entity.setUbicacion(dto.getUbicacion());
        entity.setValor(crearEntityValorFenomenoPatologico(dto.getValor()));
        return entity;
    }
    private ValorFenomenoPatologicoEntity crearEntityValorFenomenoPatologico(ValorFenomenoPatologicoDto dto) {
        ValorFenomenoPatologicoEntity entity = new ValorFenomenoPatologicoEntity();
        entity.setCodigo(dto.getCodigo());
        return entity;
    }
    private EvaluacionLosaEntity crearEntityEvaluacionLosa(EvaluacionLosaDto dto) {
        EvaluacionLosaEntity entity = new EvaluacionLosaEntity();
        entity.setRelacionFecha(dto.getRelacionFecha());
        entity.getValoresInicial().addAll(
                dto.getValoresInicial()
                        .stream()
                        .map(this::crearEntityValorInicial)
                        .collect(Collectors.toList())
        );
        return entity;
    }
    private ValorInicialEntity crearEntityValorInicial(ValorInicialDto dto) {
        ValorInicialEntity entity = new ValorInicialEntity();
        entity.setCodigo(dto.getCodigo());
        return entity;
    }

    @Override
    public ConsultaDto getByCodigo(Long codigo) {
        return consultaDao.findByCodigo(codigo);
    }

    @Override
    public List<ConsultaDto> getAll() {
        return consultaDao.findAll().stream()
                .map(ConsultaDto::new)
                .collect(Collectors.toList());
    }
}
