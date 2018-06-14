package edu.uade.server.dto;

import edu.uade.server.dto.enumerado.ColorEvaluacionEnum;
import edu.uade.server.entity.EvaluacionNoDestructivaEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EvaluacionNoDestructivaDto {

    private Long codigo;
    private ValorEvaluacionNoDestructivaDto valor;
    private Boolean cumpleNorma;
    private ColorEvaluacionEnum colorEvaluacion;

    public EvaluacionNoDestructivaDto(EvaluacionNoDestructivaEntity entity) {
        if (entity != null){

        }
    }
}
