package edu.uade.server.dto;

import edu.uade.server.dto.enumerado.RelacionFechaEnum;
import edu.uade.server.entity.EvaluacionLosaEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EvaluacionLosaDto {

    private Long codigo;
    private RelacionFechaEnum relacionFecha;
    private List<ValorInicialDto> valoresInicial = new ArrayList<>();

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

    public String toClips() {
        String losaTemplate = "(losa %s)";
        String result = "(relacion-tiempo \"%s\")";
        if(relacionFecha != null) {
            result += String.format(result, relacionFecha.getValorInferencia());
        } else {
            result += String.format(result, "no especifica");
        }

        return String.format(losaTemplate, result);
    }
}
