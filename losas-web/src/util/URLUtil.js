export const URL_BASE = (process.env.NODE_ENV === 'production') ?
                        "/losas-server"
                        :
                        "http://localhost:8080/losas-server";

export const URL_DOCUMENTACION                  = URL_BASE + "/swagger-ui.html";
export const URL_H2_DB                          = URL_BASE + "/h2-console";
export const URL_INFO                           = URL_BASE + "/info";
export const URL_HEALTH                         = URL_BASE + "/health";
export const URL_CONFIGURACION                  = URL_BASE + "/api/configuracion";
export const URL_CONSULTA                       = URL_BASE + "/api/consulta";
export const URL_CONFIGURACION_INICIAL          = URL_CONFIGURACION + "/get-all";

export const ROUTE_ROOT                         = "/";
export const ROUTE_HOME                         = ROUTE_ROOT + "home";
export const ROUTE_HOME_DIAGNOSTICO             = ROUTE_HOME + "/diagnostico";
export const ROUTE_HOME_HISTORIAL               = ROUTE_HOME + "/historial";