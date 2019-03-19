package com.spring.db.controller;

import com.spring.db.model.AutoMarka;
import com.spring.db.repository.AutoMarkaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/marka")
public class AutoMarkaController {
    @Autowired
    private AutoMarkaRepository autoMarkaRepository;
    @GetMapping("/all")
    public Iterable<AutoMarka> getAll() {
        return autoMarkaRepository.findAll();
    }

    @GetMapping("/{id}")
    public AutoMarka find(@PathVariable("id") AutoMarka autoMarka) {
        return autoMarka;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") AutoMarka autoMarka) {
        autoMarkaRepository.delete(autoMarka);
    }

    @PutMapping("/{id}")
    public AutoMarka edit(@PathVariable("id") AutoMarka autoMarka,
                     @RequestBody AutoMarka newAutoMarka) {
        BeanUtils.copyProperties(newAutoMarka, autoMarka, "id");
        return autoMarkaRepository.save(autoMarka);
    }

    @PostMapping("/add")
    public AutoMarka save(@RequestBody final AutoMarka autoMarka) {
        autoMarkaRepository.save(autoMarka);
        return autoMarka;
    }
}
