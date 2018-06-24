package edu.uade.server.dto;

import edu.uade.server.entity.DiagnosticoEntity;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
public class DiagnosticoDto {

    private Long codigo;
    private ValorDiagnosticoDto valor;
    private List<ValorDiagnosticoPosibilidadDto> valoresPosibilidad = new ArrayList<>();

    public DiagnosticoDto(DiagnosticoEntity entity) {
        if (entity != null){
            setCodigo(entity.getCodigo());
            setValor(new ValorDiagnosticoDto(entity.getValor()));
            getValoresPosibilidad().addAll(
                entity.getValoresPosibilidad()
                    .stream()
                    .map(ValorDiagnosticoPosibilidadDto::new)
                    .collect(Collectors.toList())
            );
        }
    }
}
