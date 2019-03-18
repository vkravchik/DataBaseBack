package com.spring.db.controller;

import com.spring.db.model.AutoGroup;
import com.spring.db.repository.AutoGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/group")
public class AutoGroupController {
    @Autowired
    private AutoGroupRepository autoGroupRepository;

    @GetMapping("/all")
    public Iterable<AutoGroup> getAll() {
        return autoGroupRepository.findAll();
    }
}
