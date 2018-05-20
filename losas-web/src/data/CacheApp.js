import React from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import MensajeError from "../component/MensajeError";
import {URL_HEALTH, URL_INFO} from "./URLConfig";

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

function procesarError(error) {
    let mensaje;
    if (error.response && error.response.data) {
        if (typeof error.response.data === "string"){
            mensaje = error.response.data;
        } else if (typeof error.response.data === "object"){
            mensaje = error.response.data.mensaje;
        }
    } else if (error.request) {
        mensaje = error.message;
    } else {
        mensaje = error.message;
    }
    return mensaje;
}

export function mostrarMensajeError(mensaje) {
    ReactDOM.render(
        <MensajeError open={true} mensaje={mensaje}/>, document.getElementById('mensaje_error')
    );
}

export function activarCache(){

}
