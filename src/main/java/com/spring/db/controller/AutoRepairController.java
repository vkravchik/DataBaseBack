package com.spring.db.controller;

import com.spring.db.model.AutoRepair;
import com.spring.db.repository.AutoRepairRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/repair")
public class AutoRepairController {
    @Autowired
    private AutoRepairRepository autoRepairRepository;

    @GetMapping("/all")
    public Iterable<AutoRepair> getAll() {
        return autoRepairRepository.findAll();
    }
}
