package com.spring.db.controller;

import com.spring.db.model.AutoBrigadir;
import com.spring.db.repository.AutoBrigadirRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/brigadir")
public class AutoBrigadirController {
    @Autowired
    private AutoBrigadirRepository autoBrigadirRepository;

    @GetMapping("/all")
    public Iterable<AutoBrigadir> getAll() {
        return autoBrigadirRepository.findAll();
    }
}
