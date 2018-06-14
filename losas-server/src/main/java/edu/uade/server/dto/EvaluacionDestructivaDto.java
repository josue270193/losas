package edu.uade.server.dto;

import edu.uade.server.entity.EvaluacionDestructivaEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EvaluacionDestructivaDto {

    private Long codigo;
    private ValorEvaluacionDestructivaDto valor;
    private Boolean cumpleNorma;

    public EvaluacionDestructivaDto(EvaluacionDestructivaEntity entity) {
        if (entity != null){

        }
    }
}
