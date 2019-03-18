package com.spring.db.controller;

import com.spring.db.model.AutoPersonal;
import com.spring.db.repository.AutoPersonalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/personal")
public class AutoPersonalController {
    @Autowired
    private AutoPersonalRepository autoPersonalRepository;

    @GetMapping("/all")
    public Iterable<AutoPersonal> getAll() {
        return autoPersonalRepository.findAll();
    }
}
