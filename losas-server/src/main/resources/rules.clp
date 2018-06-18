;-----------------------------------------------
;               reglas
;-----------------------------------------------


;-----------------------------------------------
;;determinacion de tipo
;-----------------------------------------------

;;ok rule
(defrule regla-01-directo
	?L <- 	(losa (relacion-tiempo ?relacion-tiempo))
	?F <- 	(fenomeno-patologico (grieta ?grieta) (deflexion ?deflexion))
			
	(test (eq ?relacion-tiempo "recien"))
	(test (or 	
		(eq ?grieta "45 grados cerca de los apoyos") (eq ?grieta "centro") (eq ?grieta "ambos sentido o mallado") 
		(eq ?deflexion "45 grados cerca de los apoyos") (eq ?deflexion "centro") (eq ?deflexion "ambos sentido o mallado")))
	=> 
	(printout t "Fue ejecutada la  regla-01-directo" crlf)
	(assert (diagnostico (tipo "directo")))
)

;;ok rule
(defrule regla-01-indirecto
	?L <- 	(losa (uso-indebido ?uso-indebido) (cuenta-memorias-calculo ?cuenta-memorias-calculo) (cumple-especificaciones-construccion ?cumple-especificaciones-construccion))
				
	(test (eq ?uso-indebido "existe"))
    (test (eq ?cuenta-memorias-calculo "existe"))
    (test (eq ?cumple-especificaciones-construccion "existe"))
		
	=> 
	(printout t "Fue ejecutada la  regla-01-indirecto" crlf)
	(assert (diagnostico (tipo "indirecto")))
)

;-----------------------------------------------
;;determinacion sub-tipo directos o indirectos
;-----------------------------------------------

;;ok rule
(defrule regla-02-directo-dimBuena
        ?L <-   (losa (cumple-dimensiones-plano ?cumple-dimensiones-plano))
	    (diagnostico (tipo "directo"))

        (test (eq ?cumple-dimensiones-plano "existe"))
        =>
        (printout t "Fue ejecutada la  regla-02-directo-dimBuena" crlf)
        (assert (diagnostico (subtipo "dimension correcta")))
)


;;ok rule
(defrule regla-02-directo-dimMala
        ?L <-   (losa (cumple-dimensiones-plano ?cumple-dimensiones-plano))
        (diagnostico (tipo "directo"))

        (test (eq ?cumple-dimensiones-plano "no existe"))
        =>
        (printout t "Fue ejecutada la  regla-02-directo-dimMala" crlf)
        (assert (diagnostico (subtipo "dimension incorrecta")))
)

;-----------------------------------------------
;;determinacion diagnosticos directos - dim buena - 
;-----------------------------------------------

;;ok rule
(defrule regla-03-directo-dimBuena-sobExcesiva
        ?L <-   (losa (uso-indebido ?uso-indebido))
        ?F <-   (fenomeno-patologico (desplome ?desplome))
        ?P <-   (propiedades-fq-concreto (esfuerzoCompresion ?esfuerzoCompresion) (contenidoCemento ?contenidoCemento))
        (diagnostico (tipo "directo"))
        (diagnostico (subtipo "dimension correcta"))

        (test (eq ?uso-indebido "existe"))
        (test (or
            (eq ?desplome "45 grados cerca de los apoyos") (eq ?desplome "centro") (eq ?desplome "ambos sentido o mallado")))
        (test (eq ?esfuerzoCompresion "existe"))
        (test (eq ?contenidoCemento "existe"))
        =>
        (printout t "Fue ejecutada la  regla-03-directo-dimBuena-sobExesiva" crlf)
        (assert (diagnostico (resultado "sobrecarga excesiva")))
)
	

;;ok rule
(defrule regla-03-directo-dimBuena-ausAcero
        ?F <-   (fenomeno-patologico (polvoCristalizacionSup ?polvoCristalizacionSup))
        ?P <-   (propiedades-fq-concreto (esfuerzoCompresion ?esfuerzoCompresion) (moduloElasticidad ?moduloElasticidad))
        ?E <-   (evaluacion-no-destructiva (localizadorBarraAcero ?localizadorBarraAcero) (UltrasonidoRayosX ?UltrasonidoRayosX))
        
        (diagnostico (tipo "directo"))
        (diagnostico (subtipo "dimension correcta"))

        (test (or
            (eq ?polvoCristalizacionSup "45 grados cerca de los apoyos") (eq ?polvoCristalizacionSup "centro") (eq ?polvoCristalizacionSup "ambos sentido o mallado")))
        (test (eq ?esfuerzoCompresion "existe"))
        (test (eq ?moduloElasticidad "existe"))
        (test (eq ?localizadorBarraAcero "se evalua"))
        (test (eq ?UltrasonidoRayosX "se evalua"))
        =>
        (printout t "Fue ejecutada la  regla-03-directo-dimBuena-ausAcero" crlf)
        (assert (diagnostico (resultado "ausencia de acero de refuerzo")))
)


;-----------------------------------------------
;;determinacion diagnosticos directos - dim mala - 
;-----------------------------------------------

;;ok rule
(defrule regla-03-directo-dimMala-errorDiseno
        ?L <-   (losa (cumple-especificaciones-construccion ?cumple-especificaciones-construccion))

        ?E <-   (evaluacion-no-destructiva (impactoAcustico ?impactoAcustico) (localizadorBarraAcero ?localizadorBarraAcero) (UltrasonidoRayosX ?UltrasonidoRayosX) (esclerometroPistolaWindsor ?esclerometroPistolaWindsor) (calorimetro ?calorimetro) )
        
        ?P <-   (propiedades-fq-concreto (acidez ?acidez) (contenidoAire ?contenidoAire) (alcaliCarbonato ?alcaliCarbonato) (alcaliSilice ?alcaliSilice) (contenidoCloruro ?contenidoCloruro) (contenidoCemento ?contenidoCemento) (esfuerzoCompresion ?esfuerzoCompresion) (moduloElasticidad ?moduloElasticidad) (moduloRuptura ?moduloRuptura) (contenidoHumedad ?contenidoHumedad) (permeabilidad ?permeabilidad) (resistenciaHieloDeshielo ?resistenciaHieloDeshielo) (resistenciaSulfatos ?resistenciaSulfatos) (potencialElectrico ?potencialElectrico) (fenolftaleina ?fenolftaleina))
        
        (diagnostico (tipo "directo"))
        (diagnostico (subtipo "dimension incorrecta"))
        
        (test (eq ?cumple-especificaciones-construccion "existe"))

        (test (or
            (eq ?impactoAcustico "no cumple norma cirsoc 201") (eq ?localizadorBarraAcero "no cumple norma cirsoc 201") (eq ?UltrasonidoRayosX "no cumple norma cirsoc 201") (eq ?esclerometroPistolaWindsor "no cumple norma cirsoc 201")))
        
        (test (or
            (eq ?acidez "existe") (eq ?contenidoAire "existe") (eq ?alcaliCarbonato "existe") (eq ?alcaliSilice "existe") (eq ?contenidoCloruro "existe") (eq ?contenidoCemento "existe") (eq ?esfuerzoCompresion "existe") (eq ?moduloElasticidad "existe") (eq ?moduloRuptura "existe") (eq ?contenidoHumedad "existe") (eq ?permeabilidad "existe") (eq ?resistenciaHieloDeshielo "existe") (eq ?resistenciaSulfatos "existe") (eq ?potencialElectrico "existe") (eq ?fenolftaleina "existe")))
        
        =>
        (printout t "Fue ejecutada la  regla-03-directo-dimMala-errorDiseno" crlf)
        (assert (diagnostico (resultado "error de diseno")))
)
	

;;ok rule
(defrule regla-03-directo-dimMala-errorConstruccion
        ?L <-   (losa (cumple-especificaciones-construccion ?cumple-especificaciones-construccion))
    
        ?P <-   (propiedades-fq-concreto (acidez ?acidez) (contenidoAire ?contenidoAire) (alcaliCarbonato ?alcaliCarbonato) (alcaliSilice ?alcaliSilice) (contenidoCloruro ?contenidoCloruro) (contenidoCemento ?contenidoCemento) (esfuerzoCompresion ?esfuerzoCompresion) (moduloElasticidad ?moduloElasticidad) (moduloRuptura ?moduloRuptura) (contenidoHumedad ?contenidoHumedad) (permeabilidad ?permeabilidad) (resistenciaHieloDeshielo ?resistenciaHieloDeshielo) (resistenciaSulfatos ?resistenciaSulfatos) (potencialElectrico ?potencialElectrico) (fenolftaleina ?fenolftaleina))

	   ?E <- 	(evaluacion-no-destructiva (localizadorBarraAcero ?localizadorBarraAcero))

	   ?F <- 	(fenomeno-patologico (corrocionAcero ?corrocionAcero))
     
       (diagnostico (tipo "directo"))
       (diagnostico (subtipo "dimension incorrecta"))

       (test (eq ?cumple-especificaciones-construccion "no existe"))
  
       (test (or
            (eq ?acidez "existe") (eq ?contenidoAire "existe") (eq ?alcaliCarbonato "existe") (eq ?alcaliSilice "existe") (eq ?contenidoCloruro "existe") (eq ?contenidoCemento "existe") (eq ?esfuerzoCompresion "existe") (eq ?moduloElasticidad "existe") (eq ?moduloRuptura "existe") (eq ?contenidoHumedad "existe") (eq ?permeabilidad "existe") (eq ?resistenciaHieloDeshielo "existe") (eq ?resistenciaSulfatos "existe") (eq ?potencialElectrico "existe") (eq ?fenolftaleina "existe")))

	   (test (eq ?localizadorBarraAcero "no cumple norma cirsoc 201"))

	   (test (or
	       (eq ?corrocionAcero "45 grados cerca de los apoyos") (eq ?corrocionAcero "centro") (eq ?corrocionAcero "ambos sentido o mallado")))
        
        =>
        (printout t "Fue ejecutada la  regla-03-directo-dimMala-errorConstruccion" crlf)
        (assert (diagnostico (resultado "error de construccion")))
)
	
	
;-----------------------------------------------
;;determinacion diagnosticos indirectos 
;-----------------------------------------------	

;;ok rule
(defrule regla-02-indirecto-quimico
        ?L <-   (losa (presencia-agua-construccion ?presencia-agua-construccion))
        (diagnostico (tipo "indirecto"))
        (test (eq ?presencia-agua-construccion "existe"))

        =>
        (printout t "Fue ejecutada la  regla-02-indirectos-quimico" crlf)
        (assert (diagnostico (subtipo "quimico")))
)


;ok rule
(defrule regla-02-indirecto-fisicos
	    ?F <- 	(fenomeno-patologico (grieta ?grieta) (desplome ?desplome) (descarnamientoDelaminacion ?descarnamientoDelaminacion))
        
        ?P <-   (propiedades-fq-concreto (contenidoCemento ?contenidoCemento) (moduloElasticidad ?moduloElasticidad))
    
        (diagnostico (tipo "indirecto"))
	    
        (test (or
	       (eq ?grieta "45 grados cerca de los apoyos") (eq ?grieta "centro") (eq ?grieta "ambos sentido o mallado") (eq ?desplome "45 grados cerca de los apoyos") (eq ?desplome "centro") (eq ?desplome "ambos sentido o mallado") (eq ?descarnamientoDelaminacion "45 grados cerca de los apoyos") (eq ?descarnamientoDelaminacion "centro") (eq ?descarnamientoDelaminacion "ambos sentido o mallado")))
	    
        (test (eq ?contenidoCemento "no cumple norma cirsoc 201"))
	    
        (test (eq ?moduloElasticidad "no cumple norma cirsoc 201"))

        =>
        (printout t "Fue ejecutada la  regla-02-indirectos-fisicos" crlf)
        (assert (diagnostico (subtipo "fisico")))
)


;-----------------------------------------------
;;determinacion diagnosticos indirectos - quimicos
;-----------------------------------------------

;;ok rule
(defrule regla-03-indirecto-quimico-retraccion
        ?L <-   (losa (relacion-tiempo ?relacion-tiempo))
        ?F <-   (fenomeno-patologico (fisura ?fisura))
        ?P <-   (propiedades-fq-concreto (contenidoCemento ?contenidoCemento) (esfuerzoCompresion ?esfuerzoCompresion) (moduloRuptura ?moduloRuptura) (contenidoHumedad ?contenidoHumedad) (permeabilidad ?permeabilidad))
        
	    (diagnostico (tipo "indirecto"))
        (diagnostico (subtipo "quimico"))
        
        (test (eq ?relacion-tiempo "recien"))
        (test (or
            (eq ?fisura "45 grados cerca de los apoyos") (eq ?fisura "centro") (eq ?fisura "ambos sentido o mallado")))
        (test (eq ?contenidoCemento "existe")) 
        (test (eq ?esfuerzoCompresion "existe")) 
        (test (eq ?moduloRuptura "existe")) 
        (test (eq ?contenidoHumedad "existe")) 
        (test (eq ?permeabilidad "existe"))
        
        =>
        (printout t "Fue ejecutada la  regla-03-indirectos-quimico-retraccion" crlf)
        (assert (diagnostico (tipoQuimico "retraccion")))
)

;;ok rule
(defrule regla-03-indirecto-quimico-reactivo
        ?F <-   (fenomeno-patologico (grieta ?grieta) (desplome ?desplome) (descarnamientoDelaminacion ?descarnamientoDelaminacion) (hinchamiento ?hinchamiento) (decoloracionMancha ?decoloracionMancha))
        
        ?P <-   (propiedades-fq-concreto (acidez ?acidez) (esfuerzoCompresion ?esfuerzoCompresion) (contenidoHumedad ?contenidoHumedad) (contenidoCemento ?contenidoCemento) (contenidoAire ?contenidoAire) (fenolftaleina ?fenolftaleina))
        
        (test (or
            (eq ?grieta "45 grados cerca de los apoyos") (eq ?grieta "centro") (eq ?grieta "ambos sentido o mallado") 
            (eq ?desplome "45 grados cerca de los apoyos") (eq ?desplome "centro") (eq ?desplome "ambos sentido o mallado")
            (eq ?descarnamientoDelaminacion "45 grados cerca de los apoyos") (eq ?descarnamientoDelaminacion "centro") (eq ?descarnamientoDelaminacion "ambos sentido o mallado")
            (eq ?hinchamiento "45 grados cerca de los apoyos") (eq ?hinchamiento "centro") (eq ?hinchamiento "ambos sentido o mallado")
            (eq ?decoloracionMancha "45 grados cerca de los apoyos") (eq ?decoloracionMancha "centro") (eq ?decoloracionMancha "ambos sentido o mallado")))
        
        (test (or
            (eq ?acidez "existe") (eq ?esfuerzoCompresion "existe") (eq ?contenidoHumedad "existe") (eq ?contenidoCemento "existe") (eq ?contenidoAire "existe") (eq ?fenolftaleina "existe")))
        
        
	    (diagnostico (tipo "indirecto"))
        (diagnostico (subtipo "quimico"))

        =>
        (printout t "Fue ejecutada la  regla-03-indirectos-quimico-reactivo" crlf)
        (assert (diagnostico (tipoQuimico "reactivo")))
)


;-----------------------------------------------
;;determinacion diagnosticos indirectos - quimicos - retraccion
;-----------------------------------------------

;;ok rule
(defrule regla-04-indirecto-quimico-retraccion-hidraulica
        ?F <-   (fenomeno-patologico (fisura ?fisura))
        
	    (diagnostico (tipo "indirecto"))
        (diagnostico (subtipo "quimico"))
        (diagnostico (tipoQuimico "retraccion"))

        (test (eq ?fisura "ambos sentido o mallado"))

        =>
        (printout t "Fue ejecutada la  regla-04-indirectos-quimico-retraccion-hidraulica" crlf)
        (assert (diagnostico (resultado "retracción hidraulica")))
)

;;ok rule
(defrule regla-04-indirecto-quimico-retraccion-plastica
        ?F <-   (fenomeno-patologico (fisura ?fisura))
        
	    (diagnostico (tipo "indirecto"))
        (diagnostico (subtipo "quimico"))
        (diagnostico (tipoQuimico "retraccion"))
        
        (test (or
            (eq ?fisura "45 grados cerca de los apoyos") (eq ?fisura "centro") (eq ?fisura "no sabe no aplica")))

        =>
        (printout t "Fue ejecutada la  regla-04-indirectos-quimico-retraccion-plastica" crlf)
        (assert (diagnostico (resultado "retraccion plastica")))
)



;-----------------------------------------------
;;determinacion diagnosticos indirectos - quimicos - reactivos
;-----------------------------------------------

;;ok rule
(defrule regla-04-indirecto-quimico-reactivo-agresivo
        ?L <-   (losa (relacion-tiempo ?relacion-tiempo))
        
        ?E <- 	(evaluacion-no-destructiva (calorimetro ?calorimetro) (UltrasonidoRayosX ?UltrasonidoRayosX) (localizadorBarraAcero ?localizadorBarraAcero))
        
	    (diagnostico (tipo "indirecto"))
        (diagnostico (subtipo "quimico"))
        (diagnostico (tipoQuimico "reactivo"))
        
        (test (eq ?relacion-tiempo "corto plazo"))
        (test (or
            (eq ?calorimetro "no cumple norma cirsoc 201") (eq ?UltrasonidoRayosX "no cumple norma cirsoc 201") (eq ?localizadorBarraAcero "no cumple norma cirsoc 201")))
            
        =>
        (printout t "Fue ejecutada la  regla-04-indirectos-quimico-reactivo-agresivo" crlf)
        (assert (diagnostico (tipoReactivo "agresivo")))
)

;;ok rule
(defrule regla-04-indirecto-quimico-reactivo-no-agresivo
        ?L <-   (losa (relacion-tiempo ?relacion-tiempo))
        
	    (diagnostico (tipo "indirecto"))
        (diagnostico (subtipo "quimico"))
        (diagnostico (tipoQuimico "reactivo"))
        
        (test (eq ?relacion-tiempo "largo plazo"))

        =>
        (printout t "Fue ejecutada la  regla-04-indirectos-quimico-reactivo-no agresivo" crlf)
        (assert (diagnostico (tipoReactivo "no agresivo")))
)


;-----------------------------------------------
;;determinacion diagnosticos indirectos - quimicos - reactivos - agresivos
;-----------------------------------------------

;;ok rule
(defrule regla-05-indirecto-quimico-reactivo-agresivo-corrosion
        ?E <- 	(evaluacion-no-destructiva (color ?color))
        ?P <-   (propiedades-fq-concreto (potencialElectrico ?potencialElectrico))
        
        
	    (diagnostico (tipo "indirecto"))
        (diagnostico (subtipo "quimico"))
        (diagnostico (tipoQuimico "reactivo"))
        (diagnostico (tipoReactivo "agresivo"))

        (test (eq ?color "marron"))
        (test (eq ?potencialElectrico "existe"))

        =>
        (printout t "Fue ejecutada la  regla-05-indirectos-quimico-reactivo-agresivo-corrosion" crlf)
        (assert (diagnostico (resultado "corrosion")))
)

;;ok rule
(defrule regla-05-indirecto-quimico-reactivo-agresivo-sulfato
        ?E <- 	(evaluacion-no-destructiva (color ?color))
        ?P <-   (propiedades-fq-concreto (resistenciaSulfatos ?resistenciaSulfatos))
        
	    (diagnostico (tipo "indirecto"))
        (diagnostico (subtipo "quimico"))
        (diagnostico (tipoQuimico "reactivo"))
        (diagnostico (tipoReactivo "agresivo"))

        (test (eq ?color "amarillo"))
        (test (eq ?resistenciaSulfatos "existe"))

        =>
        (printout t "Fue ejecutada la  regla-05-indirectos-quimico-reactivo-agresivo-sulfato" crlf)
        (assert (diagnostico (resultado "reactividad de agregados al ataque de sulfatos")))
)

;;ok rule
(defrule regla-05-indirecto-quimico-reactivo-agresivo-cloruro
        ?E <- 	(evaluacion-no-destructiva (color ?color))
        ?P <-   (propiedades-fq-concreto (contenidoCloruro ?contenidoCloruro))
        
	    (diagnostico (tipo "indirecto"))
        (diagnostico (subtipo "quimico"))
        (diagnostico (tipoQuimico "reactivo"))
        (diagnostico (tipoReactivo "agresivo"))

        (test (eq ?color "cristalino"))
        (test (eq ?contenidoCloruro "existe"))


        =>
        (printout t "Fue ejecutada la  regla-05-indirectos-quimico-reactivo-agresivo-cloruro" crlf)
        (assert (diagnostico (resultado "reactividad de agregados al ataque de cloruros")))
)


;-----------------------------------------------
;;determinacion diagnosticos indirectos - quimicos - reactivos - no agresivos
;-----------------------------------------------

;;ok rule
(defrule regla-05-indirecto-quimico-reactivo-no-agresivo-alcaliSilice
        ?E <- 	(evaluacion-no-destructiva (color ?color))
        ?P <-   (propiedades-fq-concreto (alcaliSilice ?alcaliSilice))
        
	    (diagnostico (tipo "indirecto"))
        (diagnostico (subtipo "quimico"))
        (diagnostico (tipoQuimico "reactivo"))
        (diagnostico (tipoReactivo "no agresivo"))
        
        (test (eq ?color "cristalino"))
        (test (eq ?alcaliSilice "existe"))

        =>
        (printout t "Fue ejecutada la  regla-05-indirectos-quimico-reactivo-no-agresivo-alcaliSilice" crlf)
        (assert (diagnostico (resultado "reactividad de agregados al ataque de alcali-silice")))
)

;;ok rule
(defrule regla-05-indirecto-quimico-reactivo-no-agresivo-alcaliCarbo
        ?E <- 	(evaluacion-no-destructiva (color ?color))
        ?P <-   (propiedades-fq-concreto (alcaliCarbonato ?alcaliCarbonato))
        
	    (diagnostico (tipo "indirecto"))
        (diagnostico (subtipo "quimico"))
        (diagnostico (tipoQuimico "reactivo"))
        (diagnostico (tipoReactivo "no agresivo"))
        
        (test (eq ?color "blanco"))
        (test (eq ?alcaliCarbonato "existe"))

        =>
        (printout t "Fue ejecutada la  regla-05-indirectos-quimico-reactivo-no-agresivo-alcaliCarbo" crlf)
        (assert (diagnostico (resultado "reactividad de agregados al ataque de alcali-carbonato")))
)



;-----------------------------------------------
;;determinacion diagnosticos indirectos - fisicos
;-----------------------------------------------	
	
;;ok rule
(defrule regla-03-indirecto-fisico-congelamiento
        ?P <-   (propiedades-fq-concreto (resistenciaHieloDeshielo ?resistenciaHieloDeshielo) (contenidoAire ?contenidoAire))
	    
        ?F <- 	(fenomeno-patologico (cambioAspectoMasaConcreto ?cambioAspectoMasaConcreto))
        
        (diagnostico (tipo "indirecto"))
        (diagnostico (subtipo "fisico"))
	    (test (eq ?resistenciaHieloDeshielo "no cumple norma cirsoc 201"))
	    (test (eq ?contenidoAire "no cumple norma cirsoc 201"))
	    (test (or
	       (eq ?cambioAspectoMasaConcreto "45 grados cerca de los apoyos") (eq ?cambioAspectoMasaConcreto "centro") (eq ?cambioAspectoMasaConcreto "ambos sentido o mallado")))
	
        =>
        (printout t "Fue ejecutada la  regla-03-indirectos-fisico-congelamiento" crlf)
        (assert (diagnostico (resultado "congelamiento o deshielo")))
)   

;;ok rule
(defrule regla-03-indirecto-quimico-esfuerzo
        ?F <- 	(fenomeno-patologico (decoloracionMancha ?decoloracionMancha) (corrocionAcero ?corrocionAcero))
        
	    (diagnostico (tipo "indirecto"))
        (diagnostico (subtipo "fisico"))
	    (test (or
	       (eq ?decoloracionMancha "45 grados cerca de los apoyos") (eq ?decoloracionMancha "centro") (eq ?decoloracionMancha "ambos sentido o mallado")))
	    (test (or
	       (eq ?corrocionAcero "45 grados cerca de los apoyos") (eq ?corrocionAcero "centro") (eq ?corrocionAcero "ambos sentido o mallado")))

        =>
        (printout t "Fue ejecutada la  regla-03-indirectos-fisico-esfuerzo" crlf)
        (assert (diagnostico (resultado "esfuerzo termico")))
)
