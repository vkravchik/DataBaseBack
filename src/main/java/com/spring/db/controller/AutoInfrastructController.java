package com.spring.db.controller;

import com.spring.db.model.AutoInfrastruct;
import com.spring.db.repository.AutoInfrastructRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rest/infrastruct")
public class AutoInfrastructController {
    @Autowired
    private AutoInfrastructRepository autoInfrastructRepository;

    @GetMapping("/all")
    public Iterable<AutoInfrastruct> getAll() {
        return autoInfrastructRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoInfrastruct find(@PathVariable("id") AutoInfrastruct autoInfrastruct) {
        return autoInfrastruct;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoInfrastruct autoInfrastruct) {
        autoInfrastructRepository.delete(autoInfrastruct);
    }

    @PutMapping("/{id}")
    public AutoInfrastruct edit(@PathVariable("id") AutoInfrastruct autoInfrastruct,
                     @RequestBody AutoInfrastruct newAutoInfrastruct) {
        BeanUtils.copyProperties(newAutoInfrastruct, autoInfrastruct, "id");
        return autoInfrastructRepository.save(autoInfrastruct);
    }

    @PostMapping("/add")
    public AutoInfrastruct save(@RequestBody final AutoInfrastruct autoInfrastruct) {
        autoInfrastructRepository.save(autoInfrastruct);
        return autoInfrastruct;
    }

//    SQL
    @RequestMapping("/getAllGarage")
    public Iterable<AutoInfrastruct> findAllGarage() {
        return autoInfrastructRepository.findAllGarage();
    }

    @RequestMapping("/getAllGarageByCategory")
    public Iterable<AutoInfrastruct> findAllGarageByCategory(@RequestParam("category") String category) {
        return autoInfrastructRepository.findAllGarageByCategory(category);
    }
}
