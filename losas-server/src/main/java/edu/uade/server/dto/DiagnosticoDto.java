package edu.uade.server.dto;

import edu.uade.server.entity.DiagnosticoEntity;
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

    public DiagnosticoDto(DiagnosticoEntity entity) {

    }
}
