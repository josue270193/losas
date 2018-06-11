package edu.uade.server.dto;

import edu.uade.server.dto.enumerado.RelacionFechaEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EvaluacionLosaDto {

    private Long codigo;
    private RelacionFechaEnum relacionFecha;
    private List<ValorInicialDto> valoresInicial = new ArrayList<>();
}
