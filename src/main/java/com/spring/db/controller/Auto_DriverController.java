package com.spring.db.controller;

import com.spring.db.model.AutoDrivers;
import com.spring.db.repository.AutoDriverRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/rest/drivers")
public class Auto_DriverController {
    @Autowired
    private AutoDriverRepository autoDriverRepository;

    @GetMapping("/all")
    public Iterable<AutoDrivers> getAll() {
        return autoDriverRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoDrivers findDriver(@PathVariable("id") int id) {
        return autoDriverRepository.findById(id).get();
    }

    @DeleteMapping("/{id}")
    public void deleteDriver(@PathVariable("id") AutoDrivers autoDrivers) {
        autoDriverRepository.delete(autoDrivers);
    }

    @PutMapping("/{id}")
    public AutoDrivers editUser(@PathVariable("id") AutoDrivers autoDrivers,
                                @RequestBody AutoDrivers newDriver) {
        BeanUtils.copyProperties(newDriver, autoDrivers, "id");
        return autoDriverRepository.save(autoDrivers);
    }

    @PostMapping("/add")
    public Iterable<AutoDrivers> saveDriver(@RequestBody final AutoDrivers autoDrivers) {
        autoDriverRepository.save(autoDrivers);
        return autoDriverRepository.findAll();
    }
}
