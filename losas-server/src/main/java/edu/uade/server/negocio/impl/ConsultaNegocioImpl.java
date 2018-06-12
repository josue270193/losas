package edu.uade.server.negocio.impl;

import edu.uade.server.entity.ConsultaEntity;
import edu.uade.server.negocio.ConsultaNegocio;
import net.sf.clipsrules.jni.Environment;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;

@Service
public class ConsultaNegocioImpl implements ConsultaNegocio {

    private final String PATH_TO_CLP = "/tp3_ej.clp";

    private Environment clips;

    public ConsultaNegocioImpl() {
        init();
    }

    private void init() {
        System.setProperty("java.library.path", "/Users/Juan/git/losas/libs");
        Field fieldSysPath;
        try {
            fieldSysPath = ClassLoader.class.getDeclaredField("sys_paths");
            fieldSysPath.setAccessible(true);
            fieldSysPath.set(null, null);
        } catch (NoSuchFieldException | SecurityException | IllegalArgumentException | IllegalAccessException e) {
            e.printStackTrace();
        }

        this.clips = new Environment();
        this.clips.loadFromResource(PATH_TO_CLP);
        this.clips.run();
    }

    public ConsultaEntity getConsultaByCodigo(Long codigo) {
        return null;
    }

    public ConsultaEntity consultar(ConsultaEntity consulta) {
        return null;
    }


}
