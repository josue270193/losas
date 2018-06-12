package edu.uade.server.negocio.impl;

import edu.uade.server.dto.ConsultaDto;
import edu.uade.server.negocio.ConsultaNegocio;
import net.sf.clipsrules.jni.Environment;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;

@Service
public class ConsultaNegocioImpl implements ConsultaNegocio {

    @Value("${path.clips}")
    private String pathClip;

    private Environment clips;

    public ConsultaNegocioImpl(@Value("${path.lib}") String pathLib) {
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
    public ConsultaDto getConsultaByCodigo(Long codigo) {
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
    public ConsultaDto consultar(ConsultaDto consulta) {
        return null;
    }
}
