import React from 'react';
import ReactDOM from "react-dom";
import MensajeError from "../component/MensajeError";

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
        <MensajeError open={true} mensaje={mensaje}/>,
        document.getElementById('mensaje_error')
    );
}

export function activarCache(){

}
