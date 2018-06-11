package edu.uade.server.controller;

import edu.uade.server.dto.ConfiguracionDto;
import edu.uade.server.dto.enumerado.ColorEvaluacionEnum;
import edu.uade.server.dto.enumerado.RelacionFechaEnum;
import edu.uade.server.dto.enumerado.UbicacionFenomenoEnum;
import edu.uade.server.negocio.ConfiguracionNegocio;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Arrays;

@Controller
@RequestMapping("/api/configuracion")
public class ConfiguracionControlador {

    private static Logger logger = LogManager.getLogger();

    private final ConfiguracionNegocio configuracionNegocio;

    @Autowired
    public ConfiguracionControlador(ConfiguracionNegocio configuracionNegocio){
        this.configuracionNegocio = configuracionNegocio;
    }

    @RequestMapping(
            value = "/get-all",
            method = RequestMethod.GET,
            produces = {MediaType.APPLICATION_JSON_VALUE},
            consumes = {MediaType.ALL_VALUE}
    )
    @ResponseBody
    public ConfiguracionDto obtenerConfiguracionInicial(){
        ConfiguracionDto resultado = new ConfiguracionDto();
        resultado.setValoresColorEvaluacion(Arrays.asList(ColorEvaluacionEnum.values()));
        resultado.setValoresRelacionFecha(Arrays.asList(RelacionFechaEnum.values()));
        resultado.setValoresUbicacionFenomeno(Arrays.asList(UbicacionFenomenoEnum.values()));

        resultado.setValoresDiagnostico(configuracionNegocio.obtenerValoresDiagnostico());
        resultado.setValoresDiagnosticoPosibilidad(configuracionNegocio.obtenerValoresDiagnosticoPosibilidad());
        resultado.setValoresEvaluacionDestructiva(configuracionNegocio.obtenerValoresEvaluacionDestructiva());
        resultado.setValoresEvaluacionNoDestructiva(configuracionNegocio.obtenerValoresEvaluacionNoDestructiva());
        resultado.setValoresFenomenoPatologico(configuracionNegocio.obtenerValoresFenomenoPatologico());
        resultado.setValoresInicial(configuracionNegocio.obtenerValoresInicial());
        return resultado;
    }
}
