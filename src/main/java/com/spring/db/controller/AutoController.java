package com.spring.db.controller;

import com.spring.db.model.Auto;
import com.spring.db.repository.AutoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/rest/auto")
public class AutoController {
    @Autowired
    private AutoRepository autoRepository;

    @GetMapping("/all")
    public Iterable<Auto> getAll() {
        return autoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Auto find(@PathVariable("id") Auto auto) {
        return auto;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Auto auto) {
        autoRepository.delete(auto);
    }

    @PutMapping("/{id}")
    public Auto edit(@PathVariable("id") Auto auto,
                     @RequestBody Auto newAuto) {
        BeanUtils.copyProperties(newAuto, auto, "id");
        return autoRepository.save(auto);
    }

    @PostMapping("/add")
    public Auto save(@RequestBody final Auto auto) {
        autoRepository.save(auto);
        return auto;
    }

    @RequestMapping("/getAll")
    public Iterable<Auto> findAll() {
        return autoRepository.findAll();
    }
}
