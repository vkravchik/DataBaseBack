package com.spring.db.model;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;

@Entity
@Table(name = "auto_personal")
public class AutoPersonal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String surname;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_category_personal")
    private AutoCategoryPersonal autoCategoryPersonal;

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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public AutoCategoryPersonal getAutoCategoryPersonal() {
        return autoCategoryPersonal;
    }

    public void setAutoCategoryPersonal(AutoCategoryPersonal autoCategoryPersonal) {
        this.autoCategoryPersonal = autoCategoryPersonal;
    }

    public AutoPersonal() {
    }

    public AutoPersonal(Integer id, String name, String surname, AutoCategoryPersonal autoCategoryPersonal) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.autoCategoryPersonal = autoCategoryPersonal;
    }
}
