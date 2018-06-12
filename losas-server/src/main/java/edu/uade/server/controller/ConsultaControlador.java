package edu.uade.server.controller;

import edu.uade.server.dto.ConsultaDto;
import edu.uade.server.entity.ConsultaEntity;
import edu.uade.server.negocio.ConsultaNegocio;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/consulta")
public class ConsultaControlador {

    private static Logger logger = LogManager.getLogger();

    private ConsultaNegocio consultaService;

    @Autowired
    public ConsultaControlador(ConsultaNegocio consultaService) {
        this.consultaService = consultaService;
    }

    @RequestMapping(
            value = "/",
            method = RequestMethod.GET,
            produces = {MediaType.APPLICATION_JSON_VALUE},
            consumes = {MediaType.ALL_VALUE})
    public ConsultaEntity getConsulta(Long id) {
        return this.consultaService.getConsultaByCodigo(1l);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ConsultaDto makeConsulta(ConsultaDto consulta) {
        return this.consultaService.consultar(consulta);
    }

}
