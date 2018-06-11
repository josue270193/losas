package edu.uade.server.dto;

import edu.uade.server.entity.ValorEvaluacionDestructivaEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ValorEvaluacionDestructivaDto {

    private Long codigo;
    private String descripcion;
    private String valorInferencia;

    public ValorEvaluacionDestructivaDto(ValorEvaluacionDestructivaEntity entity) {
        this.codigo = entity.getCodigo();
        this.descripcion = entity.getDescripcion();
        this.valorInferencia = entity.getValorInferencia();
    }
}
