package edu.uade.server.negocio.impl;

import edu.uade.server.dao.ConsultaDao;
import edu.uade.server.dto.*;
import edu.uade.server.entity.*;
import edu.uade.server.mapper.ConsultaMapper;
import edu.uade.server.negocio.ConsultaNegocio;
import net.sf.clipsrules.jni.Environment;
import net.sf.clipsrules.jni.MultifieldValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.*;
import java.lang.reflect.Field;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ConsultaNegocioImpl implements ConsultaNegocio {

    private static final String CLASSPATH = "classpath:";
    private final ResourceLoader resourceLoader;
    private final ConsultaDao consultaDao;
    private Environment clips;

    @Value("${path.clips}")
    private String[] pathClip;

    @Autowired
    public ConsultaNegocioImpl(@Value("${path.lib}") String pathLib, ConsultaDao consultaDao, ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
        this.consultaDao = consultaDao;

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

            clips = new Environment();
            for (String path : pathClip){
                final Resource fileResource = resourceLoader.getResource(CLASSPATH + path);
                clips.load(fileResource.getFile().getAbsolutePath());
            }
            clips.reset();
            for (String eval : listaAssert){
                clips.eval(eval);
            }

            clips.run();

            String evalStr = "(find-all-facts ((?f output)) TRUE)";
            MultifieldValue pv = (MultifieldValue) clips.eval(evalStr);


            consulta = evaluarResultado(consulta, clips);
            clips.destroy();

//            Guardar en BD
            consulta = guardarConsulta(consulta);

        } catch (Exception e){
            e.printStackTrace();
        }
        return consulta;
    }

    private ConsultaDto evaluarResultado(ConsultaDto consulta, Environment clips) {
        String resultado = clips.getInputBuffer();
        //clips.watch()
//        String evalStr;
//        String messageStr = "<html><p style=\"font-size:95%\">";
//
//        evalStr = "(find-all-facts ((?f technique)) TRUE)";
//
//        MultifieldValue mv = (MultifieldValue) clips.eval(evalStr);
//        int tNum = mv.size();
//
//        for (int i = 1; i <= tNum; i++)
//        {
//            evalStr = "(find-fact ((?f technique-employed)) " +
//                    "(eq ?f:priority " + i + "))";
//
//            mv = (MultifieldValue) clips.eval(evalStr);
//            if (mv.size() == 0) continue;
//
//            FactAddressValue fv = (FactAddressValue) mv.get(0);
//
//            messageStr = messageStr + ((NumberValue) fv.getFactSlot("priority")).intValue() + ". " +
//                    ((LexemeValue) fv.getFactSlot("reason")).lexemeValue() + "<br>";
//        }
//        JOptionPane.showMessageDialog(jfrm,messageStr,sudokuResources.getString("SolutionTechniques"),JOptionPane.PLAIN_MESSAGE);

        return consulta;
    }

    private ConsultaDto guardarConsulta(ConsultaDto consultaDto) {
        ConsultaEntity entity = new ConsultaEntity();

        entity.setParametro(crearEntityConsultaParametro(consultaDto.getParametro()));
        entity.setFechaCreacion(consultaDto.getFechaCreacion());

        entity = consultaDao.save(entity);

        return new ConsultaDto(entity);
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
