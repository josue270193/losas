package edu.uade.server.controller;

import edu.uade.server.dto.ConsultaDto;
import edu.uade.server.negocio.ConsultaNegocio;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping("/api/consulta")
public class ConsultaControlador {

    private static Logger logger = LogManager.getLogger();

    private final ConsultaNegocio consultaService;

    @Autowired
    public ConsultaControlador(ConsultaNegocio consultaService) {
        this.consultaService = consultaService;
    }

    @RequestMapping(
            value = "/{id}",
            method = RequestMethod.GET,
            produces = {MediaType.APPLICATION_JSON_VALUE},
            consumes = {MediaType.ALL_VALUE})
    public ConsultaDto getConsulta(@PathVariable Long id) {
        return consultaService.getByCodigo(id);
    }

    @RequestMapping(
            value = "/get-all",
            method = RequestMethod.GET,
            produces = {MediaType.APPLICATION_JSON_VALUE},
            consumes = {MediaType.ALL_VALUE})
    public List<ConsultaDto> getConsulta() {
        return consultaService.getAll();
    }

    @RequestMapping(
            value = "/",
            method = RequestMethod.POST,
            produces = {MediaType.APPLICATION_JSON_VALUE},
            consumes = {MediaType.ALL_VALUE})
    public ConsultaDto makeConsulta(@RequestBody ConsultaDto consulta) {
        return consultaService.doConsulta(consulta);
    }

}
