package com.spring.db.controller;

import com.spring.db.model.AutoGroup;
import com.spring.db.repository.AutoGroupRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rest/group")
public class AutoGroupController {
    @Autowired
    private AutoGroupRepository autoGroupRepository;

    @GetMapping("/all")
    public Iterable<AutoGroup> getAll() {
        return autoGroupRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoGroup find(@PathVariable("id") AutoGroup autoGroup) {
        return autoGroup;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoGroup autoGroup) {
        autoGroupRepository.delete(autoGroup);
    }

    @PutMapping("/{id}")
    public AutoGroup edit(@PathVariable("id") AutoGroup autoGroup,
                     @RequestBody AutoGroup newAutoGroup) {
        BeanUtils.copyProperties(newAutoGroup, autoGroup, "id");
        return autoGroupRepository.save(autoGroup);
    }

    @PostMapping("/add")
    public AutoGroup save(@RequestBody final AutoGroup autoGroup) {
        autoGroupRepository.save(autoGroup);
        return autoGroup;
    }
}
