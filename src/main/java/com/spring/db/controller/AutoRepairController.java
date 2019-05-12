package com.spring.db.controller;

import com.spring.db.model.AutoRepair;
import com.spring.db.repository.AutoRepairRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("rest/repair")
public class AutoRepairController {
    @Autowired
    private AutoRepairRepository autoRepairRepository;

    @GetMapping("/all")
    public Iterable<AutoRepair> getAll() {
        return autoRepairRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoRepair find(@PathVariable("id") AutoRepair autoRepair) {
        return autoRepair;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoRepair autoRepair) {
        autoRepairRepository.delete(autoRepair);
    }

    @PutMapping("/{id}")
    public AutoRepair edit(@PathVariable("id") AutoRepair autoRepair,
                           @RequestBody AutoRepair newAutoRepair) {
        BeanUtils.copyProperties(newAutoRepair, autoRepair, "id");
        return autoRepairRepository.save(autoRepair);
    }

    @PostMapping("/add")
    public AutoRepair save(@RequestBody final AutoRepair autoRepair) {
        autoRepairRepository.save(autoRepair);
        return autoRepair;
    }

    // SQL
    @RequestMapping("/getAllByCategory")
    public Iterable<AutoRepair> findByCategory(@RequestParam("category") String category) {
        return autoRepairRepository.findByCategory(category);
    }

    @RequestMapping("/getAllByMarka")
    public Iterable<AutoRepair> findByMarka(@RequestParam("marka") String marka) {
        return autoRepairRepository.findByMarka(marka);
    }

    @RequestMapping("/getAllByAuto")
    public Iterable<AutoRepair> findByAuto(@Param("auto") int auto) {
        return autoRepairRepository.findByAuto(auto);
    }
}
