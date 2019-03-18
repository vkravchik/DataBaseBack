package com.spring.db.controller;

import com.spring.db.model.AutoBrigada;
import com.spring.db.repository.AutoBrigadaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/brigada")
public class AutoBrigadaController {
    @Autowired
    private AutoBrigadaRepository autoBrigadaRepository;

    @GetMapping("/all")
    public Iterable<AutoBrigada> getAll() {
        return autoBrigadaRepository.findAll();
    }
}
