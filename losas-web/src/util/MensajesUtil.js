import moment from "moment";
import {obtenerConfiguracionCache} from "../data/DataConfig";
// import imagen_unknown from "./../assets/unknown.jpg"
import imagen_desconocido from "./../assets/desconocido.jpg"
import imagen_titulo from "./../assets/titulo.jpeg"

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

export const IMAGEN_TITULO = imagen_titulo;
export const IMAGEN_VALOR_DIAGNOSTICO = (codigo) => {
    return imagen_desconocido;
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