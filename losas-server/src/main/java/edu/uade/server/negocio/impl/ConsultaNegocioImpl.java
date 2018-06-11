package edu.uade.server.negocio.impl;

import edu.uade.server.entity.ConsultaEntity;
import edu.uade.server.negocio.ConsultaNegocio;
import net.sf.clipsrules.jni.Environment;
import org.springframework.stereotype.Service;

@Service
public class ConsultaNegocioImpl implements ConsultaNegocio {

    private final String PATH_TO_CLP = "/tp3_ej.clp";

    private Environment clips;

    public ConsultaNegocioImpl () {
        System.out.println(System.getProperty("java.library.path"));
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
