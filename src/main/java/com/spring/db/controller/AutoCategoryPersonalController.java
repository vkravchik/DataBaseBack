package com.spring.db.controller;

import com.spring.db.model.AutoCategoryPersonal;
import com.spring.db.repository.AutoCategoryPersonalRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rest/categoryPersonal")
public class AutoCategoryPersonalController {
    @Autowired
    private AutoCategoryPersonalRepository autoCategoryPersonalRepository;

    @GetMapping("/all")
    public Iterable<com.spring.db.model.AutoCategoryPersonal> getAll() {
        return autoCategoryPersonalRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoCategoryPersonal find(@PathVariable("id") AutoCategoryPersonal autoCategoryPersonal) {
        return autoCategoryPersonal;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoCategoryPersonal autoCategoryPersonal) {
        autoCategoryPersonalRepository.delete(autoCategoryPersonal);
    }

    @PutMapping("/{id}")
    public AutoCategoryPersonal edit(@PathVariable("id") AutoCategoryPersonal autoCategoryPersonal,
                     @RequestBody AutoCategoryPersonal newAutoCategoryPersonal) {
        BeanUtils.copyProperties(newAutoCategoryPersonal, autoCategoryPersonal, "id");
        return autoCategoryPersonalRepository.save(autoCategoryPersonal);
    }

    @PostMapping("/add")
    public AutoCategoryPersonal save(@RequestBody final AutoCategoryPersonal autoCategoryPersonal) {
        autoCategoryPersonalRepository.save(autoCategoryPersonal);
        return autoCategoryPersonal;
    }
}
