package com.spring.db.controller;

import com.spring.db.model.User;
import com.spring.db.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/rest/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/all")
    public Iterable<User> getAll() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User findUser(@PathVariable("id") User user) {
        return user;
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") User user) {
        userRepository.delete(user);
    }

    @PutMapping("/{id}")
    public User editUser(@PathVariable("id") User user,
                         @RequestBody User newUser) {
        BeanUtils.copyProperties(newUser, user, "id");
        return userRepository.save(user);
    }

    @PostMapping("/add")
    public User saveUser(@RequestBody final User user) {
        userRepository.save(user);
        return user;
    }

    @GetMapping("/byEmail")
    public Iterable<User> byEmail(@RequestParam("email") String email) {
        return userRepository.findByEmail(email);
    }
}
