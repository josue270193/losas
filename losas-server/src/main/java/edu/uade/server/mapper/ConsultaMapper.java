package edu.uade.server.mapper;

import edu.uade.server.dto.ConsultaDto;

public class ConsultaMapper {

    public static final String ASSERT = "(assert %s)";

    private static ConsultaMapper ourInstance = new ConsultaMapper();

    public static ConsultaMapper getInstance() {
        return ourInstance;
    }

    private ConsultaMapper() {
    }

    public String map(ConsultaDto consulta) {
        return consulta.toClips();
    }
}
