package com.spring.db.model;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;

@Entity
@Table(name = "auto_route")
public class AutoRoute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_street")
    private AutoStreet autoStreet;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_auto")
    private Auto auto;
    private Integer passanger_count;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public AutoStreet getAutoStreet() {
        return autoStreet;
    }

    public void setAutoStreet(AutoStreet autoStreet) {
        this.autoStreet = autoStreet;
    }

    public Auto getAuto() {
        return auto;
    }

    public void setAuto(Auto auto) {
        this.auto = auto;
    }

    public Integer getPassanger_count() {
        return passanger_count;
    }

    public void setPassanger_count(Integer passanger_count) {
        this.passanger_count = passanger_count;
    }

    public AutoRoute() {
    }

    public AutoRoute(Integer id, AutoStreet autoStreet, Auto auto, Integer passanger_count) {
        this.id = id;
        this.autoStreet = autoStreet;
        this.auto = auto;
        this.passanger_count = passanger_count;
    }
}
