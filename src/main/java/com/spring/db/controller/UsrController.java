package com.spring.db.controller;


import com.spring.db.model.User;
import com.spring.db.repository.UserRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "/api/users")
public class UsrController {
    @Autowired
    private com.spring.db.repository.UserRepo userRepo;

    @GetMapping
    public Iterable<User> getAll() {
        return userRepo.findAll();
    }

    @PostMapping()
    public User save(@RequestBody final User User) {
        userRepo.save(User);
        return User;
    }

    @GetMapping("/{id}")
    public User find(@PathVariable("id") User User) {
        return User;
    }

    @PutMapping("/{id}")
    public User edit(@PathVariable("id") User User,
                    @RequestBody User newUser) {
        BeanUtils.copyProperties(newUser, User, "id");
        return userRepo.save(User);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") User User) {
        userRepo.delete(User);
    }

    @RequestMapping("/findByUsername")
    public Optional<User> findByUsername(@RequestParam("username")String username) {
        return userRepo.findByUsername(username);
    }
}
