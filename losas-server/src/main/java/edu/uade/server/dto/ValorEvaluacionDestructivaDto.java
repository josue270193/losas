package edu.uade.server.dto;

import edu.uade.server.entity.ValorEvaluacionDestructivaEntity;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ValorEvaluacionDestructivaDto {

    private Long codigo;
    private String descripcion;
    private String valorInferencia;

    public ValorEvaluacionDestructivaDto() {

    }

    public ValorEvaluacionDestructivaDto(ValorEvaluacionDestructivaEntity entity) {
        this.codigo = entity.getCodigo();
        this.descripcion = entity.getDescripcion();
        this.valorInferencia = entity.getValorInferencia();
    }
}
