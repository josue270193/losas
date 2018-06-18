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
export const URL_CONSULTA_CONSULTAR             = URL_CONSULTA + "/consultar";
export const URL_CONSULTA_LISTAR                = URL_CONSULTA + "/get-all";
export const URL_CONSULTA_OBTENER_CODIGO        = (codigo) => URL_CONSULTA + "/get-by-id/" + codigo;
export const URL_CONFIGURACION_INICIAL          = URL_CONFIGURACION + "/get-all";

export const ROUTE_ROOT                         = "/";
export const ROUTE_HOME                         = ROUTE_ROOT + "home";
export const ROUTE_HOME_DIAGNOSTICO             = ROUTE_HOME + "/diagnostico";
export const ROUTE_HOME_HISTORIAL               = ROUTE_HOME + "/historial";
export const ROUTE_HOME_VER_DIAGNOSTICO         = ROUTE_HOME_DIAGNOSTICO + "/:id";
export const CREAR_ROUTE_HOME_VER_DIAGNOSTICO   = (id) => ROUTE_HOME_DIAGNOSTICO + "/" + id;
