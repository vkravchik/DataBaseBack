package com.spring.db.controller;

import com.spring.db.model.AutoSaleBuy;
import com.spring.db.repository.AutoSaleBuyRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rest/saleBuy")
public class AutoSaleBuyController {
    @Autowired
    private AutoSaleBuyRepository autoSaleBuyRepository;

    @GetMapping("/all")
    public Iterable<AutoSaleBuy> getAll() {
        return autoSaleBuyRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoSaleBuy find(@PathVariable("id") AutoSaleBuy autoSaleBuy) {
        return autoSaleBuy;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoSaleBuy autoSaleBuy) {
        autoSaleBuyRepository.delete(autoSaleBuy);
    }

    @PutMapping("/{id}")
    public AutoSaleBuy edit(@PathVariable("id") AutoSaleBuy autoSaleBuy,
                     @RequestBody AutoSaleBuy newAutoSaleBuy) {
        BeanUtils.copyProperties(newAutoSaleBuy, autoSaleBuy, "id");
        return autoSaleBuyRepository.save(autoSaleBuy);
    }

    @PostMapping("/add")
    public AutoSaleBuy save(@RequestBody final AutoSaleBuy autoSaleBuy) {
        autoSaleBuyRepository.save(autoSaleBuy);
        return autoSaleBuy;
    }
}
