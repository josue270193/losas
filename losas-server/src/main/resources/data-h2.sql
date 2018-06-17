/* VALORES_INICIAL */
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (1, 'Cumple la Temperatura de Construcción con Norma CIRSOC 201', '');
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (2, 'Cumple la Humedad Relativa de la Construcción con Norma CIRSOC 201', '');
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (3, 'Presencia de Agua en la Construcción', '');
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (4, 'Cumple con las especificaciones de Construcción', '');
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (5, 'Cumple las dimensiones del plano', '');
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (6, 'Cuenta con las memorias de cálculo', '');
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (7, 'Uso indebido', '');
INSERT INTO VALORES_INICIAL(codigo, descripcion, valor_inferencia) VALUES (8, 'Variación de Temperatura interna y externa', '');
/* VALORES_DIAGNOSTICO */
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (1, 'Error de Diseño', '');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (2, 'Error de Construcción', '');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (3, 'Sobrecarga Excesiva', '');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (4, 'Retracción Hidráulica', '');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (5, 'Retracción Plástica', '');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (6, 'Corrosión', '');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (7, 'Congelamiento / Deshielo', '');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (8, 'Reactividad de los agregados al ataque de Álcali-Carbonato', '');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (9, 'Reactividad de los agregados al ataque de Álcali-Sílice', '');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (10, 'Reactividad de los agregado al ataque de Sulfatos', '');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (11, 'Reactividad de los agregados al ataque de Cloruros', '');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (12, 'Esfuerzo Térmico','');
INSERT INTO VALORES_DIAGNOSTICO(codigo, descripcion, valor_inferencia) VALUES (13, 'Ausencia de Acero de Refuerzo','');
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
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (1, 'Acidez', '');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (2, 'Contenido de aire', '');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (3, 'Álcali-Carbonato', '');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (4, 'Álcali-Sílice', '');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (5, 'Contenido cemento', '');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (6, 'Contenido de Cloruro', '');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (7, 'Esfuerzo compresión', '');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (8, 'Módulo de elasticidad', '');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (9, 'Módulo de ruptura', '');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (10, 'Contenido humedad', '');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (11, 'Permeabilidad', '');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (12, 'Resistencia a hielo-deshielo', '');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (13, 'Resistencia a sulfatos', '');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (14, 'Potencial Eléctrico', '');
INSERT INTO VALORES_EVALUACION_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (15, 'Fenolftaleína', '');
/* VALORES_EVALUACION_NO_DESTRUCTIVA */
INSERT INTO VALORES_EVALUACION_NO_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (1, 'Impacto acústico con martillo', '');
INSERT INTO VALORES_EVALUACION_NO_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (2, 'Localizador barra de acero', '');
INSERT INTO VALORES_EVALUACION_NO_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (3, 'Ultrasonido / Rayos X', '');
INSERT INTO VALORES_EVALUACION_NO_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (4, 'Esclerómetro / Pistola Windsor', '');
INSERT INTO VALORES_EVALUACION_NO_DESTRUCTIVA(codigo, descripcion, valor_inferencia) VALUES (5, 'Colorímetro', '');
/* VALORES_FENOMENO_PATOLOGICO */
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (1, 'Desplomes', '');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (2, 'Grietas', '');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (3, 'Fisuras', '');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (4, 'Cambio de Aspecto de la Masa de Concreto', '');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (5, 'Deflexiones', '');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (6, 'Descarnamiento / Delaminación', '');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (7, 'Polvo / Cristalización Superficie', '');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (8, 'Hinchamiento / Expansiones', '');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (9, 'Decoloración / Mancha', '');
INSERT INTO VALORES_FENOMENO_PATOLOGICO(codigo, descripcion, valor_inferencia) VALUES (10, 'Corrosión del Acero', '');
