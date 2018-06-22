package edu.uade.server.mapper;

import edu.uade.server.dto.*;

import java.util.ArrayList;
import java.util.List;

public class ConsultaMapper {

    private static final String COMILLA_DOBLE = "\"";
    private static final String ESPACIO = " ";
    private static final String BUILD_TEMPLATE = "(%s %s)";
    private static final String BUILD_MULTISLOT = "(%s " + COMILLA_DOBLE + "%s"+ COMILLA_DOBLE + " " + COMILLA_DOBLE + "%s" + COMILLA_DOBLE +")";
    private static final String BUILD_SLOT = "(%s " + COMILLA_DOBLE + "%s"+ COMILLA_DOBLE +")";

    private static final String ASSERT = "assert";
    private static final String TEMPLATE_LOSA = "losa";
    private static final String TEMPLATE_FENOMENO_PATOLOGICO = "fenomeno-patologico";
    private static final String TEMPLATE_EVALUACION_NO_DESTRUCTIVA = "evaluacion-no-destructiva";
    private static final String TEMPLATE_EVALUACION_DESTRUCTIVA = "propiedades-fq-concreto";
    private static final String TEMPLATE_DIAGNOSTICO = "diagnostico";
    private static final String SLOT_RELACION_TIEMPO = "relacion-tiempo";
    private static final String SLOT_ESPECIFICACION_CONSTRUCCION = "cumple-especificaciones-construccion";
    private static final String SLOT_DIMENSION_PLANO = "cumple-dimensiones-plano";
    private static final String SLOT_TEMPERATURA_CONSTRUCCION = "cumple-temperatura-construccion-norma-cirsoc-201";
    private static final String SLOT_HUMEDAD_RELATIVA = "cumple-humedad-relativa-construccion-norma-cirsoc-201";
    private static final String SLOT_MEMORIA_CALCULO = "cuenta-memorias-calculo";
    private static final String VALOR_SLOT_EXISTE = "existe";
    private static final String VALOR_SLOT_NO_EXISTE = "no existe";

    public static List<String> mapConsulta(ConsultaDto consulta) {
        List<String> resultado = new ArrayList<>();
        ConsultaParametroDto parametros = consulta.getParametro();
        if (parametros != null) {
            // LOSA
            if (parametros.getEvaluacionLosa() != null) {
                resultado.add(mapLosa(parametros.getEvaluacionLosa()));
            }
            // FENOMENOS PATOLOGICOS
            if (parametros.getEvaluacionesFenomenoPatologico() != null && !parametros.getEvaluacionesFenomenoPatologico().isEmpty()) {
                resultado.add(mapFenomenoPatologico(parametros.getEvaluacionesFenomenoPatologico()));
            }
            // EVALUACIONES NO DESTRUCTIVA
            if (parametros.getEvaluacionesNoDestructiva() != null && !parametros.getEvaluacionesNoDestructiva().isEmpty()) {
                resultado.add(mapEvaluacionNoDestructiva(parametros.getEvaluacionesNoDestructiva()));
            }
            // EVALUACIONES DESTRUCTIVA
            if (parametros.getEvaluacionesDestructiva() != null && !parametros.getEvaluacionesDestructiva().isEmpty()) {
                resultado.add(mapEvaluacionDestructiva(parametros.getEvaluacionesDestructiva()));
            }
        }
        return resultado;
    }

    private static String mapEvaluacionDestructiva(List<EvaluacionDestructivaDto> dtos) {
        StringBuilder slots = new StringBuilder();



        String template = String.format(BUILD_TEMPLATE, TEMPLATE_EVALUACION_DESTRUCTIVA, slots);
        return String.format(BUILD_TEMPLATE, ASSERT, template);
    }

    private static String mapEvaluacionNoDestructiva(List<EvaluacionNoDestructivaDto> dtos) {
        StringBuilder slots = new StringBuilder();



        String template = String.format(BUILD_TEMPLATE, TEMPLATE_EVALUACION_NO_DESTRUCTIVA, slots);
        return String.format(BUILD_TEMPLATE, ASSERT, template);
    }

    private static String mapFenomenoPatologico(List<EvaluacionFenomenoPatologicoDto> dtos) {
        StringBuilder slots = new StringBuilder();

        for (EvaluacionFenomenoPatologicoDto dto : dtos){
            slots.append(String.format(BUILD_SLOT, dto.getValor().getValorInferencia(), dto.getUbicacion().getValorInferencia()));
            slots.append(ESPACIO);
        }

        String template = String.format(BUILD_TEMPLATE, TEMPLATE_FENOMENO_PATOLOGICO, slots);
        return String.format(BUILD_TEMPLATE, ASSERT, template);
    }

    private static String mapLosa(EvaluacionLosaDto losa) {
        StringBuilder slots = new StringBuilder();
        if (losa.getRelacionFecha() != null) {
            slots.append(String.format(BUILD_SLOT, SLOT_RELACION_TIEMPO, losa.getRelacionFecha().getValorInferencia()));
            slots.append(ESPACIO);
        }

        boolean agregarValor1 = true;
        boolean agregarValor2 = true;
        boolean agregarValor4 = true;
        boolean agregarValor5 = true;
        boolean agregarValor6 = true;

        for (ValorInicialDto valorInicialDto : losa.getValoresInicial()) {
            if (valorInicialDto.getCodigo().compareTo(4L) == 0) {
                agregarValor4 = false;
                slots.append(String.format(BUILD_SLOT, valorInicialDto.getValorInferencia(), VALOR_SLOT_NO_EXISTE));
                slots.append(ESPACIO);
            } else if (valorInicialDto.getCodigo().compareTo(5L) == 0) {
                agregarValor5 = false;
                slots.append(String.format(BUILD_SLOT, valorInicialDto.getValorInferencia(), VALOR_SLOT_NO_EXISTE));
                slots.append(ESPACIO);
            } else if (valorInicialDto.getCodigo().compareTo(1L) == 0) {
                agregarValor1 = false;
                slots.append(String.format(BUILD_SLOT, valorInicialDto.getValorInferencia(), VALOR_SLOT_NO_EXISTE));
                slots.append(ESPACIO);
            } else if (valorInicialDto.getCodigo().compareTo(2L) == 0) {
                agregarValor2 = false;
                slots.append(String.format(BUILD_SLOT, valorInicialDto.getValorInferencia(), VALOR_SLOT_NO_EXISTE));
                slots.append(ESPACIO);
            } else if (valorInicialDto.getCodigo().compareTo(6L) == 0) {
                agregarValor6 = false;
                slots.append(String.format(BUILD_SLOT, valorInicialDto.getValorInferencia(), VALOR_SLOT_NO_EXISTE));
                slots.append(ESPACIO);
            } else {
                slots.append(String.format(BUILD_SLOT, valorInicialDto.getValorInferencia(), VALOR_SLOT_EXISTE));
                slots.append(ESPACIO);
            }
        }
        if (agregarValor4) {
            slots.append(String.format(BUILD_SLOT, SLOT_ESPECIFICACION_CONSTRUCCION, VALOR_SLOT_EXISTE));
            slots.append(ESPACIO);
        }
        if (agregarValor5) {
            slots.append(String.format(BUILD_SLOT, SLOT_DIMENSION_PLANO, VALOR_SLOT_EXISTE));
            slots.append(ESPACIO);
        }
        if (agregarValor1) {
            slots.append(String.format(BUILD_SLOT, SLOT_TEMPERATURA_CONSTRUCCION, VALOR_SLOT_EXISTE));
            slots.append(ESPACIO);
        }
        if (agregarValor2) {
            slots.append(String.format(BUILD_SLOT, SLOT_HUMEDAD_RELATIVA, VALOR_SLOT_EXISTE));
            slots.append(ESPACIO);
        }
        if (agregarValor6) {
            slots.append(String.format(BUILD_SLOT, SLOT_MEMORIA_CALCULO, VALOR_SLOT_EXISTE));
            slots.append(ESPACIO);
        }

        String template = String.format(BUILD_TEMPLATE, TEMPLATE_LOSA, slots);
        return String.format(BUILD_TEMPLATE, ASSERT, template);
    }

}
