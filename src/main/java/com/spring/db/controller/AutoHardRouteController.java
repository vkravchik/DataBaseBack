package com.spring.db.controller;

import com.spring.db.model.AutoHardRoute;
import com.spring.db.repository.AutoHardRouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/hardRoute")
public class AutoHardRouteController {
    @Autowired
    private AutoHardRouteRepository autoHardRouteRepository;

    @GetMapping("/all")
    public Iterable<AutoHardRoute> getAll() {
        return autoHardRouteRepository.findAll();
    }
}
