package edu.uade.server.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/consulta")
public class ConsultaControlador {

    private static Logger logger = LogManager.getLogger();

    @Autowired
    public ConsultaControlador(){
    }


}