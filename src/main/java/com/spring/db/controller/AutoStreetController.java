package com.spring.db.controller;

import com.spring.db.model.AutoStreet;
import com.spring.db.repository.AutoStreetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/street")
public class AutoStreetController {
    @Autowired
    private AutoStreetRepository autoStreetRepository;

    @GetMapping("/all")
    public Iterable<AutoStreet> getAll() {
        return autoStreetRepository.findAll();
    }
}
