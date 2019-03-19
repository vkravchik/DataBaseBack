package com.spring.db.controller;

import com.spring.db.model.AutoBrigadir;
import com.spring.db.repository.AutoBrigadirRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rest/brigadir")
public class AutoBrigadirController {
    @Autowired
    private AutoBrigadirRepository autoBrigadirRepository;

    @GetMapping("/all")
    public Iterable<AutoBrigadir> getAll() {
        return autoBrigadirRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoBrigadir find(@PathVariable("id") AutoBrigadir autoBrigadir) {
        return autoBrigadir;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoBrigadir autoBrigadir) {
        autoBrigadirRepository.delete(autoBrigadir);
    }

    @PutMapping("/{id}")
    public AutoBrigadir edit(@PathVariable("id") AutoBrigadir autoBrigadir,
                     @RequestBody AutoBrigadir newAutoBrigadir) {
        BeanUtils.copyProperties(newAutoBrigadir, autoBrigadir, "id");
        return autoBrigadirRepository.save(autoBrigadir);
    }

    @PostMapping("/add")
    public AutoBrigadir save(@RequestBody final AutoBrigadir autoBrigadir) {
        autoBrigadirRepository.save(autoBrigadir);
        return autoBrigadir;
    }
}
