package edu.uade.server.negocio;

import edu.uade.server.dto.ConsultaDto;
import edu.uade.server.entity.ConsultaEntity;

public interface ConsultaNegocio {

    ConsultaEntity getConsultaByCodigo(Long codigo);

    ConsultaDto consultar(ConsultaDto consulta);

}
