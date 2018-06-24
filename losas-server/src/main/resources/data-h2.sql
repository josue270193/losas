/* VALORES_INICIAL */
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (1, 'No cumple la Temperatura de Construcción con Norma CIRSOC 201', 'cumple-temperatura-construccion-norma-cirsoc-201');
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (2, 'No cumple la Humedad Relativa de la Construcción con Norma CIRSOC 201', 'cumple-humedad-relativa-construccion-norma-cirsoc-201');
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (3, 'Presencia de Agua en la Construcción', 'presencia-agua-construccion');
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (4, 'No cumple con las especificaciones de Construcción', 'cumple-especificaciones-construccion');
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (5, 'No cumple las dimensiones del plano', 'cumple-dimensiones-plano');
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (6, 'No cuenta con las memorias de cálculo', 'cuenta-memorias-calculo');
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (7, 'Uso indebido', 'uso-indebido');
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (8, 'Variación de Temperatura interna y externa', 'variacion-temperatura-interna-externa');
/* VALORES_DIAGNOSTICO */
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (1, 'Error de Diseño', 'error de diseno');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (2, 'Error de Construcción', 'error de construccion');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (3, 'Sobrecarga Excesiva', 'sobrecarga excesiva');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (4, 'Retracción Hidráulica', 'retracción hidraulica');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (5, 'Retracción Plástica', 'retraccion plastica');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (6, 'Corrosión', 'corrosion');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (7, 'Congelamiento / Deshielo', 'congelamiento o deshielo');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (8, 'Reactividad de los agregados al ataque de Álcali-Carbonato', 'reactividad de agregados al ataque de alcali-carbonato');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (9, 'Reactividad de los agregados al ataque de Álcali-Sílice', 'reactividad de agregados al ataque de alcali-silice');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (10, 'Reactividad de los agregado al ataque de Sulfatos', 'reactividad de agregados al ataque de sulfatos');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (11, 'Reactividad de los agregados al ataque de Cloruros', 'reactividad de agregados al ataque de cloruros');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (12, 'Esfuerzo Térmico','esfuerzo termico');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (13, 'Ausencia de Acero de Refuerzo','ausencia de acero de refuerzo');
/* VALORES_DIAGNOSTICO_POSIBILIDAD */
INSERT INTO VALORES_DIAGNOSTICO_POSIBILIDAD(codigo, descripcion, valor_inferencia) VALUES (1, 'Directo', '');
INSERT INTO VALORES_DIAGNOSTICO_POSIBILIDAD(codigo, descripcion, valor_inferencia) VALUES (2, 'Indirecto', '');
INSERT INTO VALORES_DIAGNOSTICO_POSIBILIDAD(codigo, descripcion, valor_inferencia) VALUES (3, 'Directo Dimensión Correcta', '');
INSERT INTO VALORES_DIAGNOSTICO_POSIBILIDAD(codigo, descripcion, valor_inferencia) VALUES (4, 'Directo Dimensión Incorrecta', '');
INSERT INTO VALORES_DIAGNOSTICO_POSIBILIDAD(codigo, descripcion, valor_inferencia) VALUES (5, 'Indirecto Químico', '');
INSERT INTO VALORES_DIAGNOSTICO_POSIBILIDAD(codigo, descripcion, valor_inferencia) VALUES (6, 'Indirecto Físico', '');
INSERT INTO VALORES_DIAGNOSTICO_POSIBILIDAD(codigo, descripcion, valor_inferencia) VALUES (7, 'Indirecto Químico Retracción', '');
INSERT INTO VALORES_DIAGNOSTICO_POSIBILIDAD(codigo, descripcion, valor_inferencia) VALUES (8, 'Indirecto Químico Reactividad de los agregados', '');
INSERT INTO VALORES_DIAGNOSTICO_POSIBILIDAD(codigo, descripcion, valor_inferencia) VALUES (9, 'Indirecto Químico Reactividad de los agregados Agresiva', '');
INSERT INTO VALORES_DIAGNOSTICO_POSIBILIDAD(codigo, descripcion, valor_inferencia) VALUES (10, 'Indirecto Químico Reactividad de los agregados No Agresiva', '');
/* VALORES_EVALUACION_DESTRUCTIVA */
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (1, 'Acidez', 'acidez');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (2, 'Contenido de aire', 'contenidoAire');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (3, 'Álcali-Carbonato', 'alcaliCarbonato');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (4, 'Álcali-Sílice', 'alcaliSilice');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (5, 'Contenido cemento', 'contenidoCemento');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (6, 'Contenido de Cloruro', 'contenidoCloruro');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (7, 'Esfuerzo compresión', 'esfuerzoCompresion');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (8, 'Módulo de elasticidad', 'moduloElasticidad');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (9, 'Módulo de ruptura', 'moduloRuptura');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (10, 'Contenido humedad', 'contenidoHumedad');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (11, 'Permeabilidad', 'permeabilidad');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (12, 'Resistencia a hielo-deshielo', 'resistenciaHieloDeshielo');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (13, 'Resistencia a sulfatos', 'resistenciaSulfatos');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (14, 'Potencial Eléctrico', 'potencialElectrico');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (15, 'Fenolftaleína', 'fenolftaleina');
/* VALORES_EVALUACION_NO_DESTRUCTIVA */
INSERT INTO VALORES_EVALUACION_NO_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (1, 'Impacto acústico con martillo', 'impactoAcustico');
INSERT INTO VALORES_EVALUACION_NO_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (2, 'Localizador barra de acero', 'localizadorBarraAcero');
INSERT INTO VALORES_EVALUACION_NO_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (3, 'Ultrasonido / Rayos X', 'UltrasonidoRayosX');
INSERT INTO VALORES_EVALUACION_NO_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (4, 'Esclerómetro / Pistola Windsor', 'esclerometroPistolaWindsor');
INSERT INTO VALORES_EVALUACION_NO_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (5, 'Colorímetro', 'calorimetro');
/* VALORES_FENOMENO_PATOLOGICO */
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (1, 'Desplomes', 'desplome');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (2, 'Grietas', 'grieta');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (3, 'Fisuras', 'fisura');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (4, 'Cambio de Aspecto de la Masa de Concreto', 'cambioAspectoMasaConcreto');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (5, 'Deflexiones', 'deflexion');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (6, 'Descarnamiento / Delaminación', 'descarnamientoDelaminacion');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (7, 'Polvo / Cristalización Superficie', 'polvoCristalizacionSup');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (8, 'Hinchamiento / Expansiones', 'hinchamiento');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (9, 'Decoloración / Mancha', 'decoloracionMancha');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (10, 'Corrosión del Acero', 'corrocionAcero');
