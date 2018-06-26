package edu.uade.server.dto;

import edu.uade.server.entity.ValorInicialEntity;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ValorInicialDto {

    private Long codigo;
    private String descripcion;
    private String valorInferencia;

    public ValorInicialDto() {

    }

    public ValorInicialDto(ValorInicialEntity entity) {
        this.codigo = entity.getCodigo();
        this.descripcion = entity.getDescripcion();
        this.valorInferencia = entity.getValorInferencia();
    }
}
