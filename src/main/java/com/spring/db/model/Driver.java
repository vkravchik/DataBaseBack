package com.spring.db.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private String surname;
    private Integer id_auto;

    public Driver() {
    }

    public Driver(Integer id, String name, String surname, Integer id_auto) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.id_auto = id_auto;
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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Integer getId_auto() {
        return id_auto;
    }

    public void setId_auto(Integer id_auto) {
        this.id_auto = id_auto;
    }
}
