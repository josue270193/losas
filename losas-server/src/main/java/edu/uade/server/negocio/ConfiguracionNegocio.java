package edu.uade.server.negocio;

import edu.uade.server.dto.*;

import java.util.List;

public interface ConfiguracionNegocio {

    List<ValorDiagnosticoDto> obtenerValoresDiagnostico();
    List<ValorDiagnosticoPosibilidadDto> obtenerValoresDiagnosticoPosibilidad();
    List<ValorEvaluacionDestructivaDto> obtenerValoresEvaluacionDestructiva();
    List<ValorEvaluacionNoDestructivaDto> obtenerValoresEvaluacionNoDestructiva();
    List<ValorFenomenoPatologicoDto> obtenerValoresFenomenoPatologico();
    List<ValorInicialDto> obtenerValoresInicial();
}
