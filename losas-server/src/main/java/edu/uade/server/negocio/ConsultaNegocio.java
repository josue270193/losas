package edu.uade.server.negocio;

import edu.uade.server.dto.ConsultaDto;

import java.util.List;

public interface ConsultaNegocio {

    ConsultaDto doConsulta(ConsultaDto consulta);

    ConsultaDto getByCodigo(Long codigo);

    List<ConsultaDto> getAll();
}
