package com.spring.db.controller;

import com.spring.db.model.AutoHardRoute;
import com.spring.db.repository.AutoHardRouteRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
