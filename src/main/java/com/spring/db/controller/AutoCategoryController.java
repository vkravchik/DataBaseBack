package com.spring.db.controller;

import com.spring.db.model.AutoCategory;
import com.spring.db.repository.AutoCategoryRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.awt.*;

@RestController
@RequestMapping("/rest/category")
public class AutoCategoryController {
    @Autowired
    private AutoCategoryRepository autoCategoryRepository;
    @GetMapping("/all")
    public Iterable<AutoCategory> getAll() {
        return autoCategoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoCategory find(@PathVariable("id") AutoCategory autoCategory) {
        return autoCategory;
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoCategory autoCategory) {
        autoCategoryRepository.delete(autoCategory);
    }

    @PutMapping("/{id}")
    public AutoCategory edit(@PathVariable("id") AutoCategory autoCategory,
                     @RequestBody AutoCategory newAutoCategory) {
        BeanUtils.copyProperties(newAutoCategory, autoCategory, "id");
        return autoCategoryRepository.save(autoCategory);
    }

    @PostMapping("/add")
    public AutoCategory save(@RequestBody final AutoCategory autoCategory) {
        autoCategoryRepository.save(autoCategory);
        return autoCategory;
    }
}
