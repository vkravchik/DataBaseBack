package com.spring.db.model;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;

@Entity
@Table(name = "auto_infrastruct")
public class AutoInfrastruct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String street;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_category")
    private AutoCategory autoCategory;

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

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public AutoCategory getAutoCategory() {
        return autoCategory;
    }

    public void setAutoCategory(AutoCategory autoCategory) {
        this.autoCategory = autoCategory;
    }

    public AutoInfrastruct() {
    }

    public AutoInfrastruct(Integer id, String name, String street, AutoCategory autoCategory) {
        this.id = id;
        this.name = name;
        this.street = street;
        this.autoCategory = autoCategory;
    }
}
