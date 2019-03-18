package com.spring.db.model;

import javax.persistence.*;

@Entity
@Table(name = "auto_street")
public class AutoStreet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String street_start;
    private String street_finish;
    private Integer intervall;

    public AutoStreet() {
    }

    public AutoStreet(Integer id, String street_start, String street_finish, Integer intervall) {
        this.id = id;
        this.street_start = street_start;
        this.street_finish = street_finish;
        this.intervall = intervall;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStreet_start() {
        return street_start;
    }

    public void setStreet_start(String street_start) {
        this.street_start = street_start;
    }

    public String getStreet_finish() {
        return street_finish;
    }

    public void setStreet_finish(String street_finish) {
        this.street_finish = street_finish;
    }

    public Integer getIntervall() {
        return intervall;
    }

    public void setIntervall(Integer intervall) {
        this.intervall = intervall;
    }
}
