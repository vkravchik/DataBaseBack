package com.spring.db.model;

import javax.persistence.*;

@Entity
@Table(name = "auto_ptoblem")
public class AutoProblem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public AutoProblem() {
    }

    public AutoProblem(Integer id, String name) {
        this.id = id;
        this.name = name;
    }
}
