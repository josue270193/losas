package edu.uade.server.dto.enumerado;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum UbicacionFenomenoEnum {

    GRADOS_45_APOYO("45º Cerca de los apoyos", "45"),
    CENTRO("Centro", "centro"),
    MALLADO("Ambos Sentido / Mallado", "mallado"),
    DESCONOCIDO("No sabe / No Aplica", "no")
    ;

    @Getter private String descripcion;
    @Getter private String valorInferencia;

    public static UbicacionFenomenoEnum obtenerPorValorInferencia(String valorInferencia){
        for (UbicacionFenomenoEnum tipo : UbicacionFenomenoEnum.values()){
            if (tipo.valorInferencia.compareTo(valorInferencia) == 0){
                return tipo;
            }
        }
        return DESCONOCIDO;
    }
    @JsonCreator
    public static UbicacionFenomenoEnum fromNode(JsonNode node) {
        if (!node.has("valorInferencia")){
            return UbicacionFenomenoEnum.DESCONOCIDO;
        }
        String tipo = node.get("valorInferencia").asText();
        return UbicacionFenomenoEnum.obtenerPorValorInferencia(tipo);
    }
}
