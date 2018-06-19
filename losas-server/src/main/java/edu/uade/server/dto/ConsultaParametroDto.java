package edu.uade.server.dto;

import edu.uade.server.entity.ConsultaParametroEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConsultaParametroDto {

    private Long codigo;
    private EvaluacionLosaDto evaluacionLosa;
    private List<EvaluacionFenomenoPatologicoDto> evaluacionesFenomenoPatologico = new ArrayList<>();
    private List<EvaluacionNoDestructivaDto> evaluacionesNoDestructiva = new ArrayList<>();
    private List<EvaluacionDestructivaDto> evaluacionesDestructiva = new ArrayList<>();

    public ConsultaParametroDto(ConsultaParametroEntity entity) {
        if (entity != null) {
            setCodigo(entity.getCodigo());
            setEvaluacionLosa(new EvaluacionLosaDto(entity.getEvaluacionLosa()));
            evaluacionesFenomenoPatologico.addAll(
                    entity.getEvaluacionFenomenoPatologico().stream()
                            .map(EvaluacionFenomenoPatologicoDto::new)
                            .collect(Collectors.toList())
            );
            evaluacionesNoDestructiva.addAll(
                    entity.getEvaluacionNoDestructiva().stream()
                            .map(EvaluacionNoDestructivaDto::new)
                            .collect(Collectors.toList())
            );
            evaluacionesDestructiva.addAll(
                    entity.getEvaluacionDestructiva().stream()
                            .map(EvaluacionDestructivaDto::new)
                            .collect(Collectors.toList())
            );
        }
    }

}
