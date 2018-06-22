package edu.uade.server.dto;

import edu.uade.server.entity.ConsultaEntity;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
public class ConsultaDto {

    private Long codigo;
    private ConsultaParametroDto parametro;
    private DiagnosticoDto diagnostico;
    private Date fechaCreacion;
    private List<String> reglasAplicadas = new ArrayList<>();

    public ConsultaDto(ConsultaEntity entity) {
        if (entity != null){
            setCodigo(entity.getCodigo());
            setParametro(new ConsultaParametroDto(entity.getParametro()));
            setFechaCreacion(entity.getFechaCreacion());
            if (entity.getDiagnostico() != null){
                setDiagnostico(new DiagnosticoDto(entity.getDiagnostico()));
            }
            if (entity.getReglasAplicadas() != null){
                setReglasAplicadas(Arrays.asList(entity.getReglasAplicadas().split(",")));
            }
        }
    }
}
