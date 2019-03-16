package com.spring.db.controller;

import com.spring.db.model.AutoCategory;
import com.spring.db.repository.AutoCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/category")
public class AutoCategoryController {
    @Autowired
    private AutoCategoryRepository autoCategoryRepository;
    @GetMapping("/all")
    public Iterable<AutoCategory> getAll() {
        return autoCategoryRepository.findAll();
    }
}
