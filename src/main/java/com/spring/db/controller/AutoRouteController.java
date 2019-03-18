package com.spring.db.controller;

import com.spring.db.model.AutoRoute;
import com.spring.db.repository.AutoRouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/route")
public class AutoRouteController {
    @Autowired
    private AutoRouteRepository autoRouteRepository;

    @GetMapping("/all")
    public Iterable<AutoRoute> getAll() {
        return autoRouteRepository.findAll();
    }
}
