package com.spring.db.controller;

import com.spring.db.model.AutoInfrastruct;
import com.spring.db.repository.AutoInfrastructRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/infrastruct")
public class AutoInfrastructController {
    @Autowired
    private AutoInfrastructRepository autoInfrastructRepository;

    @GetMapping("/all")
    public Iterable<AutoInfrastruct> getAll() {
        return autoInfrastructRepository.findAll();
    }
}
