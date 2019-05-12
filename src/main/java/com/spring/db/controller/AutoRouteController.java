package com.spring.db.controller;

import com.spring.db.model.Auto;
import com.spring.db.model.AutoRoute;
import com.spring.db.repository.AutoRouteRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rest/route")
public class AutoRouteController {
    @Autowired
    private AutoRouteRepository autoRouteRepository;

    @GetMapping("/all")
    public Iterable<AutoRoute> getAll() {
        return autoRouteRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoRoute find(@PathVariable("id") AutoRoute autoRoute) {
        return autoRoute;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoRoute autoRoute) {
        autoRouteRepository.delete(autoRoute);
    }

    @PutMapping("/{id}")
    public AutoRoute edit(@PathVariable("id") AutoRoute autoRoute,
                     @RequestBody AutoRoute newAutoRoute) {
        BeanUtils.copyProperties(newAutoRoute, autoRoute, "id");
        return autoRouteRepository.save(autoRoute);
    }

    @PostMapping("/add")
    public AutoRoute save(@RequestBody final AutoRoute autoRoute) {
        autoRouteRepository.save(autoRoute);
        return autoRoute;
    }

    @GetMapping("/getAll")
    public Iterable<AutoRoute> findAll() {
        return autoRouteRepository.findAll();
    }
}
