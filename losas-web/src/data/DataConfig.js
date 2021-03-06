import React from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import MensajeError from "../component/MensajeError";
import {URL_CONFIGURACION_INICIAL, URL_CONSULTA_CONSULTAR, URL_CONSULTA_LISTAR, URL_CONSULTA_OBTENER_CODIGO, URL_HEALTH, URL_INFO} from "../util/URLUtil";

const CONFIGURACION_KEY = 'configuracion';

export function requestInfo(){
    return new Promise((resolve, reject) => {
        axios.get(URL_INFO)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                let mensaje = procesarError(error);
                reject(mensaje);
            })
        ;
    });
}

export function requestHealth(){
    return new Promise((resolve, reject) => {
        axios.get(URL_HEALTH)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                let mensaje = procesarError(error);
                reject(mensaje);
            })
        ;
    });
}

function transformarRequestConsulta(parametro) {
    return {
        parametro: parametro,
        fechaCreacion: new Date()
    };
}

export function requestDoConsulta(consulta){
    return new Promise((resolve, reject) => {
        axios.post(URL_CONSULTA_CONSULTAR, transformarRequestConsulta(consulta))
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                let mensaje = procesarError(error);
                reject(mensaje);
            })
        ;
    });
}

export function requestObtenerConsultaTodo(){
    return new Promise((resolve, reject) => {
        axios.get(URL_CONSULTA_LISTAR)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                let mensaje = procesarError(error);
                reject(mensaje);
            })
        ;
    });
}

export function requestObtenerConsultaCodigo(codigo){
    return new Promise((resolve, reject) => {
        axios.get(URL_CONSULTA_OBTENER_CODIGO(codigo))
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                let mensaje = procesarError(error);
                reject(mensaje);
            })
        ;
    });
}

async function requestObtenerConfiguracionInicial() {
    return new Promise((resolve, reject) => {
        axios.get(URL_CONFIGURACION_INICIAL)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                let mensaje = procesarError(error);
                reject(mensaje);
            })
    });
}

function procesarError(error) {
    let mensaje;
    if (error.response && error.response.data) {
        if (typeof error.response.data === "string"){
            mensaje = error.response.data;
        } else if (typeof error.response.data === "object"){
            mensaje = error.response.data.message;
        }
    } else if (error.request) {
        mensaje = error.message;
    } else {
        mensaje = error.message;
    }
    return mensaje;
}

function renderMensajeError(show, message = '', onClose = () => {}, type = 'error') {
    ReactDOM.render(
        <MensajeError
            variant={type}
            open={show}
            mensaje={message}
            onCerrarMensaje={onClose}
        />,
        document.getElementById('mensaje_error')
    );
}

const onCerrarMensajeError = () => {
    renderMensajeError(false);
};
export function mostrarMensajeError(mensaje) {
    renderMensajeError(true, mensaje, onCerrarMensajeError);
}

function procesarJsonField(json) {
    return JSON.stringify(json);
}

export function obtenerConfiguracionCache(){
    return JSON.parse(localStorage.getItem(CONFIGURACION_KEY)) || [];
}

export function activarCache(){
    requestObtenerConfiguracionInicial()
        .then((response) => {
            localStorage.setItem(CONFIGURACION_KEY, procesarJsonField(response));
        })
        .catch((error) => {
            mostrarMensajeError(error);
        })
    ;
}
