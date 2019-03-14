package com.spring.db.controller;

import com.spring.db.model.Driver;
import com.spring.db.repository.DriverRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/rest/drivers")
public class DriverController {
    @Autowired
    private DriverRepository driverRepository;

    @GetMapping("/all")
    public Iterable<Driver> getAll() {
        return driverRepository.findAll();
    }

    @GetMapping("/{id}")
    public Driver findDriver(@PathVariable("id") int id) {
        return driverRepository.findById(id).get();
    }

    @DeleteMapping("/{id}")
    public void deleteDriver(@PathVariable("id") Driver driver) {
        driverRepository.delete(driver);
    }

    @PutMapping("/{id}")
    public Driver editUser(@PathVariable("id") Driver driver,
                         @RequestBody Driver newUser) {
        BeanUtils.copyProperties(newUser, driver, "id");
        return driverRepository.save(driver);
    }

    @PostMapping("/addUser")
    public Iterable<Driver> saveDriver(@RequestBody final Driver driver) {
        driverRepository.save(driver);
        return driverRepository.findAll();
    }
}
