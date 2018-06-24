package edu.uade.server.dto;

import edu.uade.server.entity.ValorDiagnosticoEntity;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ValorDiagnosticoDto {

    private Long codigo;
    private String descripcion;
    private String valorInferencia;

    public ValorDiagnosticoDto(ValorDiagnosticoEntity entity) {
        this.codigo = entity.getCodigo();
        this.descripcion = entity.getDescripcion();
        this.valorInferencia = entity.getValorInferencia();
    }
}
