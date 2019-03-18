package com.spring.db.controller;

import com.spring.db.model.AutoProp;
import com.spring.db.repository.AutoPropRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/prop")
public class AutoPropController {
    @Autowired
    private AutoPropRepository autoPropRepository;

    @GetMapping("/all")
    public Iterable<AutoProp> getAll() {
        return autoPropRepository.findAll();
    }
}
