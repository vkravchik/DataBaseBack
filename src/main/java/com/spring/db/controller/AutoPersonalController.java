package com.spring.db.controller;

import com.spring.db.model.AutoPersonal;
import com.spring.db.repository.AutoPersonalRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rest/personal")
public class AutoPersonalController {
    @Autowired
    private AutoPersonalRepository autoPersonalRepository;

    @GetMapping("/all")
    public Iterable<AutoPersonal> getAll() {
        return autoPersonalRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoPersonal find(@PathVariable("id") AutoPersonal autoPersonal) {
        return autoPersonal;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoPersonal autoPersonal) {
        autoPersonalRepository.delete(autoPersonal);
    }

    @PutMapping("/{id}")
    public AutoPersonal edit(@PathVariable("id") AutoPersonal autoPersonal,
                     @RequestBody AutoPersonal newAutoPersonal) {
        BeanUtils.copyProperties(newAutoPersonal, autoPersonal, "id");
        return autoPersonalRepository.save(autoPersonal);
    }

    @PostMapping("/add")
    public AutoPersonal save(@RequestBody final AutoPersonal autoPersonal) {
        autoPersonalRepository.save(autoPersonal);
        return autoPersonal;
    }
}
