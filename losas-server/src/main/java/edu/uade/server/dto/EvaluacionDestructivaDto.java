package edu.uade.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EvaluacionDestructivaDto {

    private Long codigo;
    private ValorEvaluacionDestructivaDto valor;
    private Boolean cumpleNorma;

}
