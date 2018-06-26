package edu.uade.server.dto;

import edu.uade.server.entity.EvaluacionDestructivaEntity;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EvaluacionDestructivaDto {

    private Long codigo;
    private ValorEvaluacionDestructivaDto valor;
    private Boolean cumpleNorma;

    public EvaluacionDestructivaDto() {

    }

    public EvaluacionDestructivaDto(EvaluacionDestructivaEntity entity) {
        if (entity != null){
            setCodigo(entity.getCodigo());
            setValor(new ValorEvaluacionDestructivaDto(entity.getValor()));
            setCumpleNorma(entity.getCumpleNorma());
        }
    }
}
