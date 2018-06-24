package edu.uade.server.controller;

import edu.uade.server.dao.ValorEvaluacionDestructivaDao;
import edu.uade.server.dto.ConsultaDto;
import edu.uade.server.dto.ConsultaParametroDto;
import edu.uade.server.dto.EvaluacionDestructivaDto;
import edu.uade.server.dto.ValorEvaluacionDestructivaDto;
import edu.uade.server.mapper.ConsultaMapper;
import edu.uade.server.negocio.ConsultaNegocio;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/consulta")
public class ConsultaControlador {

    private static Logger logger = LogManager.getLogger();

    private final ConsultaNegocio consultaService;

    @Autowired
    public ConsultaControlador(ConsultaNegocio consultaService) {
        this.consultaService = consultaService;
    }

    @GetMapping(
            value = "/get-by-id/{id}",
            produces = {MediaType.APPLICATION_JSON_VALUE},
            consumes = {MediaType.ALL_VALUE})
    public ConsultaDto getConsulta(@PathVariable Long id) {
        return consultaService.getByCodigo(id);
    }

    @GetMapping(value = "/get-all")
    public List<ConsultaDto> getConsulta() {
        return consultaService.getAll();
    }

    @PostMapping(value = "/consultar")
    public ConsultaDto makeConsulta(@RequestBody ConsultaDto consulta) {
        return consultaService.doConsulta(consulta);
    }

}
