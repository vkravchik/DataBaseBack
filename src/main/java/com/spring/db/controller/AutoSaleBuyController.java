package com.spring.db.controller;

import com.spring.db.model.AutoSaleBuy;
import com.spring.db.repository.AutoSaleBuyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/saleBuy")
public class AutoSaleBuyController {
    @Autowired
    private AutoSaleBuyRepository autoSaleBuyRepository;

    @GetMapping("/all")
    public Iterable<AutoSaleBuy> getAll() {
        return autoSaleBuyRepository.findAll();
    }
}
