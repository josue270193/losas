import moment from "moment";
import {obtenerConfiguracionCache} from "../data/DataConfig";
// import imagen_unknown from "./../assets/unknown.jpg"
import imagen_1 from "./../assets/1.jpg"
import imagen_2 from "./../assets/2.jpg"
import imagen_3 from "./../assets/3.jpg"
import imagen_4 from "./../assets/4.jpg"
import imagen_5 from "./../assets/5.jpg"
import imagen_6 from "./../assets/6.jpg"
import imagen_7 from "./../assets/7.png"
import imagen_8 from "./../assets/8.jpg"
import imagen_9 from "./../assets/9.png"
import imagen_10 from "./../assets/10.jpg"
import imagen_11 from "./../assets/11.jpg"
import imagen_12 from "./../assets/12.jpg"
import imagen_13 from "./../assets/13.jpg"

import imagen_desconocido from "./../assets/desconocido.jpg"
import imagen_titulo from "./../assets/titulo.jpeg"

const ARRAY_DESCRIPCION = [
    {
        codigo: "error de diseno",
        descripcion: "Grietas, longitudinal, en la mitad, en esquinas a 45 º, deflexiones, falta de recubrimiento, o falta de acero",
        foto: imagen_1
    },
    {
        codigo: "error de construccion",
        descripcion: "Grietas, deflexiones en el centro, polvo, corrosión, desmoronamiento, grietas en los apoyos, falta de acero, mala colocación del acero",
        foto: imagen_2
    },
    {
        codigo: "sobrecarga excesiva",
        descripcion: "Grietas, puntuales, en la mitad de la losa, deflexiones, desprendimiento, polvo",
        foto: imagen_3
    },
    {
        codigo: "retracción hidraulica",
        descripcion: "Fisuras, en malla, polvo, superficial, numerosas",
        foto: imagen_4
    },
    {
        codigo: "retraccion plastica",
        descripcion: "Grietas, fisuran 45 en esquinas, longitudinal, polvo",
        foto: imagen_5
    },
    {
        codigo: "corrosion",
        descripcion: "Grietas, desplome, cambio de masa, polvo, color rojizo",
        foto: imagen_6
    },
    {
        codigo: "congelamiento o deshielo",
        descripcion: "Desmoronamiento, cambio de masa , grietas, polvo laminación, desprendimiento",
        foto: imagen_7
    },
    {
        codigo: "reactividad de agregados al ataque de alcali-carbonato",
        descripcion: "Agrietamiento, fisuras cambio de masa, desmoronamieto, color oscuro",
        foto: imagen_8
    },
    {
        codigo: "reactividad de agregados al ataque de alcali-silice",
        descripcion: "Agrietamiento, fisuras,, laminación, polvo, color blanco",
        foto: imagen_9
    },
    {
        codigo: "reactividad de agregados al ataque de sulfatos",
        descripcion: "Agrietamiento, fisuras, desmoronamento, cambio de masa color amarillento",
        foto: imagen_10
    },
    {
        codigo: "reactividad de agregados al ataque de cloruros",
        descripcion: "Grietas, cambio de masa, fisuras, desmoronamiento, polvo, colr cristaliono, corrosión del acero",
        foto: imagen_11
    },
    {
        codigo: "esfuerzo termico",
        descripcion: "Grietas, desplome, cambio de masa, polvo, corrosión del acero, cambio de color",
        foto: imagen_12
    },
    {
        codigo: "ausencia de acero de refuerzo",
        descripcion: "Grietas profundas, desmoronamiento, laminación, cambio de masa, polvo",
        foto: imagen_13
    },
];

export const TITULO_APLICATIVO = "Losas";

export const MENSAJE_ERROR_SERVIDOR = "Error Servidor";
export const MENSAJE_TABLA_SIN_CAMBIOS = "Sin cambios";
export const MENSAJE_BOTON_LIMPIAR = "Limpiar";
export const MENSAJE_BOTON_APLICAR = "Aplicar";
export const MENSAJE_BOTON_ACEPTAR = "Aceptar";
export const MENSAJE_BOTON_COPIAR = "Volver a Realizar Consulta";
export const MENSAJE_BOTON_CANCELAR = "Cancelar";
export const MENSAJE_FILTRO_TODOS = "Todos";
export const MENSAJE_INICIO = "Comenzar";
export const MENSAJE_EVALUACION_LOSAS = "Evaluación Losas";
export const MENSAJE_EVALUACION_NO_DESTRUCTIVA = "Evaluación no Destructiva";
export const MENSAJE_EVALUACION_DESTRUCTIVA = "Evaluación Destructiva";
export const MENSAJE_FINALIZAR = "Finalizar";
export const MENSAJE_SIGUIENTE = "Siguiente";
export const MENSAJE_ANTERIOR = "Anterior";
export const MENSAJE_REINICIAR = "Reiniciar";
export const MENSAJE_SELECCION = "Seleccione una opción";
export const MENSAJE_SELECCIONES = "Seleccione";
export const MENSAJE_CUMPLE_NORMA = "Cumple";
export const MENSAJE_NO_CUMPLE_NORMA = "No Cumple";
export const MENSAJE_CANTIDAD_SELECCIONADO = (cantidad) => {return cantidad > 1 ? cantidad + ' Seleccionados' : cantidad + ' Seleccionado'};
export const MENSAJE_ALERTA_CANCELACION = "¿Desea cancelar la operación?";
export const MENSAJE_TITULO_ITEM_PRIMARIO = (fecha) => "Consulta al " + fecha;
export const MENSAJE_TITULO_ITEM_SECUNDARIO = (codigo) => "Código: " + codigo;
export const MENSAJE_VALOR_DIAGNOSTICO = (codigo) => {
    let item = obtenerConfiguracionCache()['valoresDiagnostico'].find((i) => i.codigo === codigo);
    return item ? item.descripcion : VALOR_RESPUESTA_POR_DEFECTO;
};
export const MENSAJE_DESCRIPCION_CASO = (codigo) => {
    let itemCodigo = obtenerConfiguracionCache()['valoresDiagnostico'].find((i) => i.codigo === codigo);
    let elemento;
    if (itemCodigo) {
        elemento = ARRAY_DESCRIPCION.find((item) => item.codigo === itemCodigo.valorInferencia);
    }
    return (elemento && elemento.descripcion) || 'Sin data';
};

export const IMAGEN_TITULO = imagen_titulo;
export const IMAGEN_VALOR_DIAGNOSTICO = (codigo) => {
    let itemCodigo = obtenerConfiguracionCache()['valoresDiagnostico'].find((i) => i.codigo === codigo);
    let elemento;
    if (itemCodigo) {
        elemento = ARRAY_DESCRIPCION.find((item) => item.codigo === itemCodigo.valorInferencia);
    }
    return (elemento && elemento.foto) || imagen_desconocido;
};

export const FORMATO_FECHA_HORA = (fecha) => moment(fecha).format('DD/MM/YYYY HH:MM');

export const CAMPO_RELACION_FECHA = "Relación Fecha";
export const CAMPO_RELACION_FECHA_HELP = "Relación entre Fecha Construcción y Fecha aparición Fenomenos";
export const CAMPO_EVALUACION_INICIAL = "Evaluación Inicial";
export const CAMPO_EVALUACION_INICIAL_HELP = "Observación General";
export const CAMPO_FENOMENOS_PATOLOGICO = "Fenomenos Patalógicos";
export const CAMPO_FENOMENOS_PATOLOGICO_HELP = "Observación Fenomenos";
export const CAMPO_FENOMENOS_PATOLOGICO_UBICACION = "Ubicación";
export const CAMPO_EVALUACION_NO_DESTRUCTIVA = "Evaluación no Destructiva";
export const CAMPO_EVALUACION_NO_DESTRUCTIVA_COLOR = "Color";
export const CAMPO_EVALUACION_NO_DESTRUCTIVA_HELP = "Observaciones con instrumentos no destructivos a la losa";
export const CAMPO_EVALUACION_DESTRUCTIVA = "Evaluación Destructiva";
export const CAMPO_EVALUACION_DESTRUCTIVA_HELP = "Resultados de los examenes de laboratorio";

export const VALOR_UBICACION_POR_DEFECTO = "no sabe no aplica";
export const VALOR_RESPUESTA_POR_DEFECTO = "Sin determinar";

export const TITULO_HOME_DIAGNOSTICO = "Diagnóstico";
export const TITULO_HOME_HISTORIAL = "Historial";
export const TITULO_LISTA_HISTORIAL = "Consultas Realizadas";
export const TITULO_VER_CONSULTA = (id) => "Consulta al " + id;
export const TITULO_VER_CONSULTA_SUBTITULO = (id) => "Codigo Nº " + id;
export const TITULO_DIAGNOSTICO_RESPUESTA = "Respuesta";
export const TITULO_DIAGNOSTICO_PARAMETROS = "Parámetros";
export const TITULO_REGLAS_APLICADAS = "Reglas Aplicadas";
export const TITULO_PARAMETRO_NORMA_CIRSOC_201 = "CIRSOC 201";