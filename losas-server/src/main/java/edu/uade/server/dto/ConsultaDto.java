package edu.uade.server.dto;

import edu.uade.server.entity.ConsultaEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConsultaDto {

    private Long codigo;
    private ConsultaParametroDto parametro;
    private DiagnosticoDto diagnostico;

    public ConsultaDto(ConsultaEntity entity) {
        if (entity != null){
            setCodigo(entity.getCodigo());
            setParametro(new ConsultaParametroDto(entity.getParametro()));
            if (entity.getDiagnostico() != null){
                setDiagnostico(new DiagnosticoDto(entity.getDiagnostico()));
            }
        }
    }
}
