package com.spring.db.controller;

import com.spring.db.repository.AutoCategoryPersonalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/categoryPersonal")
public class AutoCategoryPersonalController {
    @Autowired
    private AutoCategoryPersonalRepository autoCategoryPersonalRepository;

    @GetMapping("/all")
    public Iterable<com.spring.db.model.AutoCategoryPersonal> getAll() {
        return autoCategoryPersonalRepository.findAll();
    }
}
