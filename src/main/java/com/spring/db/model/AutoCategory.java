package com.spring.db.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "auto_category")
public class AutoCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;
    private String name;

    public AutoCategory() {
    }

    public AutoCategory(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

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
}
