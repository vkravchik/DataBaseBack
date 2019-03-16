package com.spring.db.controller;

import com.spring.db.model.Auto;
import com.spring.db.repository.AutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/rest/auto")
public class AutoController {
    @Autowired
    private AutoRepository autoRepository;

    @GetMapping("/all")
    public Iterable<Auto> getAll() {
        return autoRepository.findAll();
    }
}
