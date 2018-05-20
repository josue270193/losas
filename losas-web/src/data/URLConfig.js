
export const URL_BASE = (process.env.NODE_ENV === 'production') ? "/acarrea2-server" : "http://192.168.0.10:8080/losas-server";

export const URL_DOCUMENTACION                  = URL_BASE + "/swagger-ui.html";
export const URL_INFO                           = URL_BASE + "/info";
export const URL_HEALTH                         = URL_BASE + "/health";