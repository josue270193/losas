package edu.uade.server.dto.enumerado;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum RelacionFechaEnum {

    RECIEN("Reciente", "recien"),
    CORTO_PLAZO("Corto Plazo (Menos de 30 dias)", "corto_plazo"),
    LARGO_PLAZO("Largo Plazo (Mayor de 30 dias)", "largo_plazo")
    ;

    @Getter private String descripcion;
    @Getter private String valorInferencia;

    public static RelacionFechaEnum obtenerPorValorInferencia(String valorInferencia){
        for (RelacionFechaEnum tipo : RelacionFechaEnum.values()){
            if (tipo.valorInferencia.compareTo(valorInferencia) == 0){
                return tipo;
            }
        }
        return RECIEN;
    }
    @JsonCreator
    public static RelacionFechaEnum fromNode(JsonNode node) {
        if (!node.has("valorInferencia")){
            return RelacionFechaEnum.RECIEN;
        }
        String tipo = node.get("valorInferencia").asText();
        return RelacionFechaEnum.obtenerPorValorInferencia(tipo);
    }
}
