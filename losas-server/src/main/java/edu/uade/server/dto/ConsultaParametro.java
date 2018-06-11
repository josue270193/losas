package edu.uade.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConsultaParametro {

    private Long codigo;
    private EvaluacionLosaDto evaluacionLosa;
    private List<EvaluacionFenomenoPatologicoDto> evaluacionesFenomenoPatologico = new ArrayList<>();
    private List<EvaluacionNoDestructivaDto> evaluacionesNoDestructiva = new ArrayList<>();
    private List<EvaluacionDestructivaDto> evaluacionesDestructiva = new ArrayList<>();

}
