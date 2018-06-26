package uade.edu.server.maper;

import com.google.common.annotations.VisibleForTesting;
import edu.uade.server.dto.*;
import edu.uade.server.dto.enumerado.RelacionFechaEnum;
import edu.uade.server.dto.enumerado.UbicacionFenomenoEnum;
import edu.uade.server.mapper.ConsultaMapper;

import java.util.ArrayList;
import java.util.List;

public class ConsultaMapperTest {

    public void testDirecta() {
        ConsultaDto consulta = new ConsultaDto();
        ConsultaParametroDto param = new ConsultaParametroDto();
        EvaluacionLosaDto losa = new EvaluacionLosaDto();
        losa.setRelacionFecha(RelacionFechaEnum.CORTO_PLAZO);
        EvaluacionFenomenoPatologicoDto fenomeno = new EvaluacionFenomenoPatologicoDto();
        fenomeno.setCumpleNorma(true);
        fenomeno.setUbicacion(UbicacionFenomenoEnum.CENTRO);
        List<EvaluacionFenomenoPatologicoDto> evals = new ArrayList<EvaluacionFenomenoPatologicoDto>();
        ValorFenomenoPatologicoDto valor = new ValorFenomenoPatologicoDto();
        valor.setValorInferencia("grieta");
        fenomeno.setValor(valor);

        evals.add(fenomeno);
        param.setEvaluacionesFenomenoPatologico(evals);

        param.setEvaluacionLosa(losa);
        consulta.setParametro(param);


        List<String> strings = ConsultaMapper.mapConsulta(consulta);
        for (String s :
                strings) {

            System.out.println(s);
        }
    }

    public static void main(String ...args) {
        new ConsultaMapperTest().testDirecta();
    }

}
