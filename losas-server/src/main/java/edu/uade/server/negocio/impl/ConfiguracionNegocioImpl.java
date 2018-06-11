package edu.uade.server.negocio.impl;

import edu.uade.server.dao.*;
import edu.uade.server.dto.*;
import edu.uade.server.entity.*;
import edu.uade.server.negocio.ConfiguracionNegocio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ConfiguracionNegocioImpl implements ConfiguracionNegocio {

    private final ValorInicialDao valorInicialDao;
    private final ValorFenomenoPatologicoDao valorFenomenoPatologicoDao;
    private final ValorEvaluacionNoDestructivaDao valorEvaluacionNoDestructivaDao;
    private final ValorEvaluacionDestructivaDao valorEvaluacionDestructivaDao;
    private final ValorDiagnosticoDao valorDiagnosticoDao;
    private final ValorDiagnosticoPosibilidadDao valorDiagnosticoPosibilidadDao;

    @Autowired
    public ConfiguracionNegocioImpl(ValorInicialDao valorInicialDao, ValorFenomenoPatologicoDao valorFenomenoPatologicoDao, ValorEvaluacionNoDestructivaDao valorEvaluacionNoDestructivaDao, ValorEvaluacionDestructivaDao valorEvaluacionDestructivaDao, ValorDiagnosticoDao valorDiagnosticoDao, ValorDiagnosticoPosibilidadDao valorDiagnosticoPosibilidadDao) {
        this.valorInicialDao = valorInicialDao;
        this.valorFenomenoPatologicoDao = valorFenomenoPatologicoDao;
        this.valorEvaluacionNoDestructivaDao = valorEvaluacionNoDestructivaDao;
        this.valorEvaluacionDestructivaDao = valorEvaluacionDestructivaDao;
        this.valorDiagnosticoDao = valorDiagnosticoDao;
        this.valorDiagnosticoPosibilidadDao = valorDiagnosticoPosibilidadDao;
    }

    @Override
    public List<ValorDiagnosticoDto> obtenerValoresDiagnostico() {
        List<ValorDiagnosticoDto> resultado = new ArrayList<>();
        for (ValorDiagnosticoEntity entity : valorDiagnosticoDao.findAll()){
            resultado.add(new ValorDiagnosticoDto(entity));
        }
        return resultado;
    }

    @Override
    public List<ValorDiagnosticoPosibilidadDto> obtenerValoresDiagnosticoPosibilidad() {
        List<ValorDiagnosticoPosibilidadDto> resultado = new ArrayList<>();
        for (ValorDiagnosticoPosibilidadEntity entity : valorDiagnosticoPosibilidadDao.findAll()){
            resultado.add(new ValorDiagnosticoPosibilidadDto(entity));
        }
        return resultado;
    }

    @Override
    public List<ValorEvaluacionDestructivaDto> obtenerValoresEvaluacionDestructiva() {
        List<ValorEvaluacionDestructivaDto> resultado = new ArrayList<>();
        for (ValorEvaluacionDestructivaEntity entity : valorEvaluacionDestructivaDao.findAll()){
            resultado.add(new ValorEvaluacionDestructivaDto(entity));
        }
        return resultado;
    }

    @Override
    public List<ValorEvaluacionNoDestructivaDto> obtenerValoresEvaluacionNoDestructiva() {
        List<ValorEvaluacionNoDestructivaDto> resultado = new ArrayList<>();
        for (ValorEvaluacionNoDestructivaEntity entity : valorEvaluacionNoDestructivaDao.findAll()){
            resultado.add(new ValorEvaluacionNoDestructivaDto(entity));
        }
        return resultado;
    }

    @Override
    public List<ValorFenomenoPatologicoDto> obtenerValoresFenomenoPatologico() {
        List<ValorFenomenoPatologicoDto> resultado = new ArrayList<>();
        for (ValorFenomenoPatologicoEntity entity : valorFenomenoPatologicoDao.findAll()){
            resultado.add(new ValorFenomenoPatologicoDto(entity));
        }
        return resultado;
    }

    @Override
    public List<ValorInicialDto> obtenerValoresInicial() {
        List<ValorInicialDto> resultado = new ArrayList<>();
        for (ValorInicialEntity entity : valorInicialDao.findAll()){
            resultado.add(new ValorInicialDto(entity));
        }
        return resultado;
    }
}
