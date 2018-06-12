package edu.uade.server.negocio;

import edu.uade.server.dto.ConsultaDto;

public interface ConsultaNegocio {

    ConsultaDto getConsultaByCodigo(Long codigo);

    ConsultaDto consultar(ConsultaDto consulta);

}
