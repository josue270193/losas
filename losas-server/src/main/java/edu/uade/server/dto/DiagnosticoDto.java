package edu.uade.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DiagnosticoDto {

    private Long codigo;
    private ValorDiagnosticoDto valor;
    private List<ValorDiagnosticoPosibilidadDto> valoresPosibilidad = new ArrayList<>();

}
