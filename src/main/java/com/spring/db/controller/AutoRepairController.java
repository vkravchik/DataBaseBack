package com.spring.db.controller;

import com.spring.db.model.AutoRepair;
import com.spring.db.repository.AutoRepairRepository;
import com.spring.db.utils.Utils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

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
    public Iterable<AutoRepair> findByAuto(@RequestParam("auto") int auto) {
        return autoRepairRepository.findByAuto(auto);
    }

    @RequestMapping("/getAllByCarTypeAndDetail")
    public Iterable<AutoRepair> getAllByCarTypeAndDetail(@RequestParam("carType") String carType,
                                                         @RequestParam("detail") String detail) {
        return autoRepairRepository.findAllByCarTypeAndDetail(carType, detail);
    }

    @RequestMapping("/getAllByPersonAndDate")
    public Iterable<AutoRepair> getAllByPersonAndDate(@RequestParam("person")int person,
                                              @RequestParam("date_start")String start,
                                              @RequestParam("date_finish")String finish) {
        LocalDate date_start = Utils.getDateFromString(start);
        LocalDate date_finish = Utils.getDateFromString(finish);
        return autoRepairRepository.findAllByPersonAndDate(person, date_start, date_finish);
    }

    @RequestMapping("/getAllByPersonAndDateAndAuto")
    public Iterable<AutoRepair> getAllByPersonAndDateAndAuto(@RequestParam("person")int person,
                                                             @RequestParam("auto")int auto,
                                                             @RequestParam("date_start")String start,
                                                             @RequestParam("date_finish")String finish) {
        LocalDate date_start = Utils.getDateFromString(start);
        LocalDate date_finish = Utils.getDateFromString(finish);
        return autoRepairRepository.findAllByPersonAndDateAndAuto(person, auto, date_start, date_finish);
    }
}
