package com.spring.db.controller;

import com.spring.db.model.AutoProp;
import com.spring.db.repository.AutoPropRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rest/prop")
public class AutoPropController {
    @Autowired
    private AutoPropRepository autoPropRepository;

    @GetMapping("/all")
    public Iterable<AutoProp> getAll() {
        return autoPropRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoProp find(@PathVariable("id") AutoProp autoProp) {
        return autoProp;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoProp autoProp) {
        autoPropRepository.delete(autoProp);
    }

    @PutMapping("/{id}")
    public AutoProp edit(@PathVariable("id") AutoProp autoProp,
                     @RequestBody AutoProp newAutoProp) {
        BeanUtils.copyProperties(newAutoProp, autoProp, "id");
        return autoPropRepository.save(autoProp);
    }

    @PostMapping("/add")
    public AutoProp save(@RequestBody final AutoProp autoProp) {
        autoPropRepository.save(autoProp);
        return autoProp;
    }
}
