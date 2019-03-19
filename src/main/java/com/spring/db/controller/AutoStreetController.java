package com.spring.db.controller;

import com.spring.db.model.AutoStreet;
import com.spring.db.repository.AutoStreetRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rest/street")
public class AutoStreetController {
    @Autowired
    private AutoStreetRepository autoStreetRepository;

    @GetMapping("/all")
    public Iterable<AutoStreet> getAll() {
        return autoStreetRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoStreet find(@PathVariable("id") AutoStreet autoStreet) {
        return autoStreet;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoStreet autoStreet) {
        autoStreetRepository.delete(autoStreet);
    }

    @PutMapping("/{id}")
    public AutoStreet edit(@PathVariable("id") AutoStreet autoStreet,
                     @RequestBody AutoStreet newAutoStreet) {
        BeanUtils.copyProperties(newAutoStreet, autoStreet, "id");
        return autoStreetRepository.save(autoStreet);
    }

    @PostMapping("/add")
    public AutoStreet save(@RequestBody final AutoStreet autoStreet) {
        autoStreetRepository.save(autoStreet);
        return autoStreet;
    }
}
