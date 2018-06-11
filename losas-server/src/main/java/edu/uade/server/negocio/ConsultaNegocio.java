package edu.uade.server.negocio;

import edu.uade.server.entity.ConsultaEntity;

public interface ConsultaNegocio {

    ConsultaEntity getConsultaByCodigo(Long codigo);

    ConsultaEntity consultar(ConsultaEntity consulta);

}
