package edu.uade.server.negocio.impl;

import edu.uade.server.dao.ConsultaDao;
import edu.uade.server.dto.ConsultaDto;
import edu.uade.server.negocio.ConsultaNegocio;
import net.sf.clipsrules.jni.Environment;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ConsultaNegocioImpl implements ConsultaNegocio {

    private final ConsultaDao consultaDao;
    private Environment clips;

    @Value("${path.clips}")
    private String pathClip;

    public ConsultaNegocioImpl(@Value("${path.lib}") String pathLib, ConsultaDao consultaDao) {
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
            clips = new Environment();
            clips.loadFromResource(pathClip);
            clips.run();
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public ConsultaDto getByCodigo(Long codigo) {
        return null;
    }

    @Override
    public List<ConsultaDto> getAll() {
        return consultaDao.findAll().stream()
                .map(ConsultaDto::new)
                .collect(Collectors.toList());
    }
}
