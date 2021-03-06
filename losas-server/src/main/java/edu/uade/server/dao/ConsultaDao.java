package edu.uade.server.dao;

import edu.uade.server.dto.ConsultaDto;
import edu.uade.server.entity.ConsultaEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultaDao extends JpaRepository<ConsultaEntity, Long> {

    ConsultaDto findByCodigo(Long codigo);
}
