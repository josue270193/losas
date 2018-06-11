package edu.uade.server.dto;

import edu.uade.server.dto.enumerado.ColorEvaluacionEnum;
import edu.uade.server.dto.enumerado.RelacionFechaEnum;
import edu.uade.server.dto.enumerado.UbicacionFenomenoEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConfiguracionDto {

    private List<RelacionFechaEnum> valoresRelacionFecha = new ArrayList<>();
    private List<ColorEvaluacionEnum> valoresColorEvaluacion = new ArrayList<>();
    private List<UbicacionFenomenoEnum> valoresUbicacionFenomeno = new ArrayList<>();
    private List<ValorInicialDto> valoresInicial = new ArrayList<>();
    private List<ValorFenomenoPatologicoDto> valoresFenomenoPatologico = new ArrayList<>();
    private List<ValorEvaluacionNoDestructivaDto> valoresEvaluacionNoDestructiva = new ArrayList<>();
    private List<ValorEvaluacionDestructivaDto> valoresEvaluacionDestructiva = new ArrayList<>();
    private List<ValorDiagnosticoDto> valoresDiagnostico = new ArrayList<>();
    private List<ValorDiagnosticoPosibilidadDto> valoresDiagnosticoPosibilidad = new ArrayList<>();

}
