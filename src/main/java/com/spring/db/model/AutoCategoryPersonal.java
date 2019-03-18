package com.spring.db.model;

import javax.persistence.*;

@Entity
@Table(name = "auto_category_personal")
public class AutoCategoryPersonal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    public AutoCategoryPersonal() {
    }

    public AutoCategoryPersonal(Integer id, String name) {
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
