;-----------------------------------------------
;               deftemplates V2.0
;-----------------------------------------------

(deftemplate MAIN::losa
    (slot relacion-tiempo (type STRING)
                (allowed-values "recien" "corto plazo" "largo plazo" "no especifica")
                (default "no especifica"))
    (multislot cumple-temperatura-construccion-norma-cirsoc-201 (type STRING)
                (allowed-values "existe" "no existe" "no especifica")
                (default "no especifica"))
    (multislot cumple-humedad-relativa-construccion-norma-cirsoc-201 (type STRING)
                (allowed-values "existe" "no existe" "no especifica")
                (default "no especifica"))
    (multislot presencia-agua-construccion (type STRING)
                (allowed-values "existe" "no existe" "no especifica")
                (default "no especifica"))
    (multislot cumple-especificaciones-construccion (type STRING)
                (allowed-values "existe" "no existe" "no especifica")
                (default "no especifica"))
    (multislot cumple-dimensiones-plano (type STRING)
                (allowed-values "existe" "no existe" "no especifica")
                (default "no especifica"))
    (multislot cuenta-memorias-calculo (type STRING)
                (allowed-values "existe" "no existe" "no especifica")
                (default "no especifica"))
    (multislot uso-indebido (type STRING)
                (allowed-values "existe" "no existe" "no especifica")
                (default "no especifica"))
    (multislot variacion-temperatura-interna-externa (type STRING)
                (allowed-values "existe" "no existe" "no especifica")
                (default "no especifica"))
)

(deftemplate MAIN::fenomeno-patologico
    (multislot desplome (type STRING)
                (allowed-values "45 grados cerca de los apoyos" "centro" "ambos sentido o mallado" "no sabe no aplica" "no especifica" "cumple norma cirsoc 201" "no especifica")
                (default "no especifica"))
    (multislot grieta (type STRING)
                (allowed-values "45 grados cerca de los apoyos" "centro" "ambos sentido o mallado" "no sabe no aplica" "no especifica" "cumple norma cirsoc 201" "no especifica")
                (default "no especifica"))
    (multislot fisura (type STRING)
                (allowed-values "45 grados cerca de los apoyos" "centro" "ambos sentido o mallado" "no sabe no aplica" "no especifica" "cumple norma cirsoc 201" "no especifica")
                (default "no especifica"))
	(multislot cambioAspectoMasaConcreto (type STRING)
                (allowed-values "45 grados cerca de los apoyos" "centro" "ambos sentido o mallado" "no sabe no aplica" "no especifica" "cumple norma cirsoc 201" "no especifica")
                (default "no especifica"))
	(multislot deflexion (type STRING)
                (allowed-values "45 grados cerca de los apoyos" "centro" "ambos sentido o mallado" "no sabe no aplica" "no especifica" "cumple norma cirsoc 201" "no especifica")
                (default "no especifica"))
	(multislot descarnamientoDelaminacion (type STRING)
                (allowed-values "45 grados cerca de los apoyos" "centro" "ambos sentido o mallado" "no sabe no aplica" "no especifica" "cumple norma cirsoc 201" "no especifica")
                (default "no especifica"))
	(multislot polvoCristalizacionSup (type STRING)
                (allowed-values "45 grados cerca de los apoyos" "centro" "ambos sentido o mallado" "no sabe no aplica" "no especifica" "cumple norma cirsoc 201" "no especifica")
                (default "no especifica"))
	(multislot hinchamiento (type STRING)
                (allowed-values "45 grados cerca de los apoyos" "centro" "ambos sentido o mallado" "no sabe no aplica" "no especifica" "cumple norma cirsoc 201" "no especifica")
                (default "no especifica"))
	(multislot decoloracionMancha (type STRING)
                (allowed-values "45 grados cerca de los apoyos" "centro" "ambos sentido o mallado" "no sabe no aplica" "no especifica" "cumple norma cirsoc 201" "no especifica")
                (default "no especifica"))
	(multislot corrocionAcero (type STRING)
                (allowed-values "45 grados cerca de los apoyos" "centro" "ambos sentido o mallado" "no sabe no aplica" "cumple norma cirsoc 201" "no especifica")
                (default "no especifica"))
)

(deftemplate MAIN::evaluacion-no-destructiva
    (multislot impactoAcustico (type STRING)
                (allowed-values "se evalua" "no aplica" "cumple norma cirsoc 201" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot localizadorBarraAcero (type STRING)
                (allowed-values "se evalua" "no aplica" "cumple norma cirsoc 201" "no cumple norma cirsoc 201")
                (default "no aplica"))
	(multislot UltrasonidoRayosX (type STRING)
                (allowed-values "se evalua" "no aplica" "cumple norma cirsoc 201" "no cumple norma cirsoc 201")
                (default "no aplica"))
	(multislot esclerometroPistolaWindsor (type STRING)
                (allowed-values "se evalua" "no aplica" "cumple norma cirsoc 201" "no cumple norma cirsoc 201")
                (default "no aplica"))
	(multislot calorimetro (type STRING)
                (allowed-values "se evalua" "no aplica" "cumple norma cirsoc 201" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot color (type STRING)
                (allowed-values "marron" "blanco" "cristalino" "amarillo" "no aplica" "cumple norma cirsoc 201" "no cumple norma cirsoc 201")
                (default "no aplica"))
)

(deftemplate MAIN::propiedades-fq-concreto
    (multislot acidez (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot contenidoAire (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot alcaliCarbonato (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot alcaliSilice (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot contenidoCemento (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot contenidoCloruro (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot esfuerzoCompresion (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot moduloElasticidad (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot moduloRuptura (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot contenidoHumedad (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot permeabilidad (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot resistenciaHieloDeshielo (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot resistenciaSulfatos (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot potencialElectrico (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
    (multislot fenolftaleina (type STRING)
                (allowed-values "existe" "cumple norma cirsoc 201" "no aplica" "no cumple norma cirsoc 201")
                (default "no aplica"))
)

(deftemplate MAIN::diagnostico
        (slot resultado (type STRING)
                (allowed-values "error de diseno" "error de construccion" "sobrecarga excesiva" "retracción hidraulica" "retraccion plastica" "corrosion" "congelamiento o deshielo" "reactividad de agregados al ataque de alcali-carbonato" "reactividad de agregados al ataque de alcali-silice" "reactividad de agregados al ataque de sulfatos" "reactividad de agregados al ataque de cloruros" "esfuerzo termico" "ausencia de acero de refuerzo" "no especifica")
                (default "no especifica"))
        (slot tipo (type STRING)
                (allowed-values "directo" "indirecto" "no especifica")
                (default "no especifica"))
        (slot subtipo (type STRING)
                (allowed-values "dimension correcta" "dimension incorrecta" "quimico" "fisico" "quimico" "no especifica")
                (default "no especifica"))
        (slot tipoQuimico (type STRING)
                (allowed-values "retraccion" "reactivo" "no especifica")
                (default "no especifica"))
        (slot tipoReactivo (type STRING)
                (allowed-values "agresivo" "no agresivo" "no especifica")
                (default "no especifica"))
)