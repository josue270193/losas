package edu.uade.server.dto;

import edu.uade.server.dto.enumerado.RelacionFechaEnum;
import edu.uade.server.entity.EvaluacionLosaEntity;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
public class EvaluacionLosaDto {

    private Long codigo;
    private RelacionFechaEnum relacionFecha;
    private List<ValorInicialDto> valoresInicial = new ArrayList<>();

    public EvaluacionLosaDto() {

    }

    public EvaluacionLosaDto(EvaluacionLosaEntity entity) {
        if (entity != null){
            setCodigo(entity.getCodigo());
            setRelacionFecha(entity.getRelacionFecha());
            valoresInicial.addAll(
                entity.getValoresInicial().stream()
                    .map(ValorInicialDto::new)
                    .collect(Collectors.toList())
            );
        }
    }
}
