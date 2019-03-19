package com.spring.db.controller;

import com.spring.db.model.AutoProblem;
import com.spring.db.repository.AutoProblemRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/problem")
public class AutoProblemController {
    @Autowired
    private AutoProblemRepository autoProblemRepository;

    @GetMapping("/all")
    public Iterable<AutoProblem> getAll() {
        return autoProblemRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoProblem find(@PathVariable("id") AutoProblem autoProblem) {
        return autoProblem;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoProblem autoProblem) {
        autoProblemRepository.delete(autoProblem);
    }

    @PutMapping("/{id}")
    public AutoProblem edit(@PathVariable("id") AutoProblem autoProblem,
                     @RequestBody AutoProblem newAutoProblem) {
        BeanUtils.copyProperties(newAutoProblem, autoProblem, "id");
        return autoProblemRepository.save(autoProblem);
    }

    @PostMapping("/add")
    public AutoProblem save(@RequestBody final AutoProblem autoProblem) {
        autoProblemRepository.save(autoProblem);
        return autoProblem;
    }
}
