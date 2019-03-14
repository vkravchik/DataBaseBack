package com.spring.db.controller;

import com.spring.db.model.Auto_Drivers;
import com.spring.db.repository.Auto_DriverRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/rest/drivers")
public class Auto_DriverController {
    @Autowired
    private Auto_DriverRepository autoDriverRepository;

    @GetMapping("/all")
    public Iterable<Auto_Drivers> getAll() {
        return autoDriverRepository.findAll();
    }

    @GetMapping("/{id}")
    public Auto_Drivers findDriver(@PathVariable("id") int id) {
        return autoDriverRepository.findById(id).get();
    }

    @DeleteMapping("/{id}")
    public void deleteDriver(@PathVariable("id") Auto_Drivers autoDrivers) {
        autoDriverRepository.delete(autoDrivers);
    }

    @PutMapping("/{id}")
    public Auto_Drivers editUser(@PathVariable("id") Auto_Drivers autoDrivers,
                                 @RequestBody Auto_Drivers newDriver) {
        BeanUtils.copyProperties(newDriver, autoDrivers, "id");
        return autoDriverRepository.save(autoDrivers);
    }

    @PostMapping("/add")
    public Iterable<Auto_Drivers> saveDriver(@RequestBody final Auto_Drivers autoDrivers) {
        autoDriverRepository.save(autoDrivers);
        return autoDriverRepository.findAll();
    }
}
