package edu.uade.server.dto;

import edu.uade.server.entity.ValorDiagnosticoPosibilidadEntity;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ValorDiagnosticoPosibilidadDto {

    private Long codigo;
    private String descripcion;
    private String valorInferencia;

    public ValorDiagnosticoPosibilidadDto(ValorDiagnosticoPosibilidadEntity entity) {
        this.codigo = entity.getCodigo();
        this.descripcion = entity.getDescripcion();
        this.valorInferencia = entity.getValorInferencia();
    }
}
