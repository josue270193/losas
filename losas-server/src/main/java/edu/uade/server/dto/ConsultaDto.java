package edu.uade.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConsultaDto {

    private Long codigo;
    private ConsultaParametro parametro;
    private DiagnosticoDto diagnostico;

}
