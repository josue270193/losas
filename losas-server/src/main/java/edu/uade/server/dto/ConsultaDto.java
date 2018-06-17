package edu.uade.server.dto;

import edu.uade.server.entity.ConsultaEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConsultaDto {

    private Long codigo;
    private ConsultaParametroDto parametro;
    private DiagnosticoDto diagnostico;
    private Date fechaCreacion;

    public ConsultaDto(ConsultaEntity entity) {
        if (entity != null){
            setCodigo(entity.getCodigo());
            setParametro(new ConsultaParametroDto(entity.getParametro()));
            if (entity.getDiagnostico() != null){
                setDiagnostico(new DiagnosticoDto(entity.getDiagnostico()));
            }
            setFechaCreacion(entity.getFechaCreacion());
        }
    }
}
