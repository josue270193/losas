package edu.uade.server.dto;

import edu.uade.server.dto.enumerado.UbicacionFenomenoEnum;
import edu.uade.server.entity.EvaluacionFenomenoPatologicoEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EvaluacionFenomenoPatologicoDto {

    private Long codigo;
    private ValorFenomenoPatologicoDto valor;
    private UbicacionFenomenoEnum ubicacion;
    private Boolean cumpleNorma;

    public EvaluacionFenomenoPatologicoDto(EvaluacionFenomenoPatologicoEntity entity) {
        if (entity != null){

        }
    }
}
