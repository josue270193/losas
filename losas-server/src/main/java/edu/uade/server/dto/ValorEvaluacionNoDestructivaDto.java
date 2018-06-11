package edu.uade.server.dto;

import edu.uade.server.entity.ValorEvaluacionNoDestructivaEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ValorEvaluacionNoDestructivaDto {

    private Long codigo;
    private String descripcion;
    private String valorInferencia;

    public ValorEvaluacionNoDestructivaDto(ValorEvaluacionNoDestructivaEntity entity) {
        this.codigo = entity.getCodigo();
        this.descripcion = entity.getDescripcion();
        this.valorInferencia = entity.getValorInferencia();
    }
}
