package com.spring.db.controller;

import com.spring.db.model.AutoHardRoute;
import com.spring.db.repository.AutoHardRouteRepository;
import com.spring.db.utils.Utils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("rest/hardRoute")
public class AutoHardRouteController {
    @Autowired
    private AutoHardRouteRepository autoHardRouteRepository;

    @GetMapping("/all")
    public Iterable<AutoHardRoute> getAll() {
        return autoHardRouteRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoHardRoute find(@PathVariable("id") AutoHardRoute autoHardRoute) {
        return autoHardRoute;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoHardRoute autoHardRoute) {
        autoHardRouteRepository.delete(autoHardRoute);
    }

    @PutMapping("/{id}")
    public AutoHardRoute edit(@PathVariable("id") AutoHardRoute autoHardRoute,
                     @RequestBody AutoHardRoute newAutoHardRoute) {
        BeanUtils.copyProperties(newAutoHardRoute, autoHardRoute, "id");
        return autoHardRouteRepository.save(autoHardRoute);
    }

    @PostMapping("/add")
    public AutoHardRoute save(@RequestBody final AutoHardRoute autoHardRoute) {
        autoHardRouteRepository.save(autoHardRoute);
        return autoHardRoute;
    }

    @RequestMapping("/findByAutoAndDate")
    public Iterable<AutoHardRoute> findByAutoAndDate(@RequestParam("auto_id") String auto_id,
                                                     @RequestParam("date")String date) {
        LocalDate cur_date = Utils.getDateFromString(date);
        return autoHardRouteRepository.findAllByAutoAndDate(auto_id, cur_date);
    }
}
