package edu.uade.server.mapper;

import edu.uade.server.dao.ValorDiagnosticoDao;
import edu.uade.server.dao.ValorEvaluacionDestructivaDao;
import edu.uade.server.dao.ValorEvaluacionNoDestructivaDao;
import edu.uade.server.dao.ValorFenomenoPatologicoDao;
import edu.uade.server.dto.*;
import edu.uade.server.entity.ValorEvaluacionDestructivaEntity;
import edu.uade.server.entity.ValorEvaluacionNoDestructivaEntity;
import edu.uade.server.entity.ValorFenomenoPatologicoEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ConsultaMapper {

    public static final String ASSERT = "(assert %s)";

    private ValorFenomenoPatologicoDao fenomenoPatologicoDao;

    private ValorEvaluacionNoDestructivaDao valorNoDestructiva;

    private ValorEvaluacionDestructivaDao valorDestructiva;

    private ValorDiagnosticoDao valorDiagnostico;

    public ConsultaMapper(ValorFenomenoPatologicoDao fenomenoPatologicoDao, ValorEvaluacionNoDestructivaDao valorNoDestructiva, ValorEvaluacionDestructivaDao valorDestructiva, ValorDiagnosticoDao valorDiagnostico) {
        this.fenomenoPatologicoDao = fenomenoPatologicoDao;
        this.valorNoDestructiva = valorNoDestructiva;
        this.valorDestructiva = valorDestructiva;
        this.valorDiagnostico = valorDiagnostico;
    }

    public String mapConsulta(ConsultaDto consulta) {
        ConsultaParametroDto parametros = consulta.getParametro();
        EvaluacionLosaDto evaluacionLosa = parametros.getEvaluacionLosa();

        StringBuilder b = new StringBuilder();

        // LOSA
        if (evaluacionLosa != null) {
            b.append(mapLosa(evaluacionLosa));
            b.append("\r\n");
        }


        // FENOMENOS PATOLOGICOS
        if (parametros.getEvaluacionesFenomenoPatologico() != null && !parametros.getEvaluacionesFenomenoPatologico().isEmpty()) {
            String fenomenoPatologicoTemplate = "(fenomeno-patologico %s)";
            StringBuilder fenomenos = new StringBuilder();

            for (EvaluacionFenomenoPatologicoDto fenomeno :
                    parametros.getEvaluacionesFenomenoPatologico()) {

                fenomenos.append(mapFenomenoPatologico(fenomeno));
            }
            b.append(String.format(fenomenoPatologicoTemplate, fenomenos.toString()));
            b.append("\r\n");
        }

        // NO DESTRUCTIVA
        if (parametros.getEvaluacionesNoDestructiva() != null && !parametros.getEvaluacionesNoDestructiva().isEmpty()) {
            String noDestructivoTemplate = "(evaluacion-no-destructiva %s)";
            StringBuilder noDestructivas = new StringBuilder();

            for (EvaluacionNoDestructivaDto noDestructiva :
                    parametros.getEvaluacionesNoDestructiva()) {

                noDestructivas.append(mapEvaluacionNoDestructiva(noDestructiva));
            }
            b.append(String.format(noDestructivoTemplate, noDestructivas.toString()));
            b.append("\r\n");
        }

        // PROPIEDADES CONCRETO
        if (parametros.getEvaluacionesDestructiva() != null && !parametros.getEvaluacionesDestructiva().isEmpty()) {
            String destructivoTemplate = "(propiedades-fq-concreto %s)";
            StringBuilder destructivas = new StringBuilder();

            for (EvaluacionDestructivaDto destructiva :
                    parametros.getEvaluacionesDestructiva()) {

                destructivas.append(mapEvaluacionDestructiva(destructiva));
            }
            b.append(String.format(destructivoTemplate, destructivas.toString()));
            b.append("\r\n");
        }

        return b.toString();
    }


    private String mapLosa(EvaluacionLosaDto losa) {
        String losaTemplate = "(losa %s)";
        String result = "(relacion-tiempo \"%s\")";
        if (losa.getRelacionFecha() != null) {
            result += String.format(result, losa.getRelacionFecha().getValorInferencia());
        } else {
            result += String.format(result, "no especifica");
        }

        return String.format(losaTemplate, result);
    }

    private String mapFenomenoPatologico(EvaluacionFenomenoPatologicoDto fenomeno) {

        return String.format("(%s %s)", fenomeno.getValor().getDescripcion(), fenomeno.getValor().getValorInferencia());
    }

    private String mapEvaluacionNoDestructiva(EvaluacionNoDestructivaDto noDestructiva) {

        return String.format("(%s %s)", noDestructiva.getValor().getDescripcion(), noDestructiva.getValor().getValorInferencia());
    }

    private String mapEvaluacionDestructiva(EvaluacionDestructivaDto destructiva) {

        return String.format("(%s %s)", destructiva.getValor().getDescripcion(), destructiva.getValor().getValorInferencia());
    }
}
