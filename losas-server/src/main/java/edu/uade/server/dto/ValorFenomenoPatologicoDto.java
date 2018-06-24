package edu.uade.server.dto;

import edu.uade.server.entity.ValorFenomenoPatologicoEntity;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ValorFenomenoPatologicoDto {

    private Long codigo;
    private String descripcion;
    private String valorInferencia;

    public ValorFenomenoPatologicoDto(ValorFenomenoPatologicoEntity entity) {
        this.codigo = entity.getCodigo();
        this.descripcion = entity.getDescripcion();
        this.valorInferencia = entity.getValorInferencia();
    }
}
