package com.spring.db.controller;

import com.spring.db.model.AutoProblem;
import com.spring.db.repository.AutoProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/problem")
public class AutoProblemController {
    @Autowired
    private AutoProblemRepository autoProblemRepository;

    @GetMapping("/all")
    public Iterable<AutoProblem> getAll() {
        return autoProblemRepository.findAll();
    }
}
