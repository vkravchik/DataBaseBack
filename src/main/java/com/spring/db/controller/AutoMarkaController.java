package com.spring.db.controller;

import com.spring.db.model.AutoMarka;
import com.spring.db.repository.AutoMarkaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/marka")
public class AutoMarkaController {
    @Autowired
    private AutoMarkaRepository autoMarkaRepository;
    @GetMapping("/all")
    public Iterable<AutoMarka> getAll() {
        return autoMarkaRepository.findAll();
    }
}
