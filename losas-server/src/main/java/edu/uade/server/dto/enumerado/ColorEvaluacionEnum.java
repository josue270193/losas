package edu.uade.server.dto.enumerado;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum ColorEvaluacionEnum {

    MARRON("Marron", "marron"),
    BLANCO("Blanco", "blanco"),
    CRISTALINO("Cristalino", "cristalino"),
    AMARRILLO("Amarrillo", "amarillo"),
    DESCONOCIDO("No sabe / No Aplica", "no aplica")
    ;

    @Getter private String descripcion;
    @Getter private String valorInferencia;

    public static ColorEvaluacionEnum obtenerPorValorInferencia(String valorInferencia){
        for (ColorEvaluacionEnum tipo : ColorEvaluacionEnum.values()){
            if (tipo.valorInferencia.compareTo(valorInferencia) == 0){
                return tipo;
            }
        }
        return DESCONOCIDO;
    }
    @JsonCreator
    public static ColorEvaluacionEnum fromNode(JsonNode node) {
        if (!node.has("valorInferencia")){
            return ColorEvaluacionEnum.DESCONOCIDO;
        }
        String tipo = node.get("valorInferencia").asText();
        return ColorEvaluacionEnum.obtenerPorValorInferencia(tipo);
    }
}

