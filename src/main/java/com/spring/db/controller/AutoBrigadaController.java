package com.spring.db.controller;

import com.spring.db.model.AutoBrigada;
import com.spring.db.repository.AutoBrigadaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rest/brigada")
public class AutoBrigadaController {
    @Autowired
    private AutoBrigadaRepository autoBrigadaRepository;

    @GetMapping("/all")
    public Iterable<AutoBrigada> getAll() {
        return autoBrigadaRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoBrigada find(@PathVariable("id") AutoBrigada autoBrigada) {
        return autoBrigada;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoBrigada autoBrigada) {
        autoBrigadaRepository.delete(autoBrigada);
    }

    @PutMapping("/{id}")
    public AutoBrigada edit(@PathVariable("id") AutoBrigada autoBrigada,
                     @RequestBody AutoBrigada newAutoBrigada) {
        BeanUtils.copyProperties(newAutoBrigada, autoBrigada, "id");
        return autoBrigadaRepository.save(autoBrigada);
    }

    @PostMapping("/add")
    public AutoBrigada save(@RequestBody final AutoBrigada autoBrigada) {
        autoBrigadaRepository.save(autoBrigada);
        return autoBrigada;
    }
}
