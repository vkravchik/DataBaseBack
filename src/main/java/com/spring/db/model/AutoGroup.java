package com.spring.db.model;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "auto_group")
public class AutoGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_personal")
    private AutoPersonal autoPersonal;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_drivers")
    private AutoDrivers autoDrivers;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_brigada")
    private AutoBrigada autoBrigada;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_brigadir")
    private AutoBrigadir autoBrigadir;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public AutoPersonal getAutoPersonal() {
        return autoPersonal;
    }

    public void setAutoPersonal(AutoPersonal autoPersonal) {
        this.autoPersonal = autoPersonal;
    }

    public AutoDrivers getAutoDrivers() {
        return autoDrivers;
    }

    public void setAutoDrivers(AutoDrivers autoDrivers) {
        this.autoDrivers = autoDrivers;
    }

    public AutoBrigada getAutoBrigada() {
        return autoBrigada;
    }

    public void setAutoBrigada(AutoBrigada autoBrigada) {
        this.autoBrigada = autoBrigada;
    }

    public AutoBrigadir getAutoBrigadir() {
        return autoBrigadir;
    }

    public void setAutoBrigadir(AutoBrigadir autoBrigadir) {
        this.autoBrigadir = autoBrigadir;
    }

    public AutoGroup() {
    }

    public AutoGroup(Integer id, AutoPersonal autoPersonal, AutoDrivers autoDrivers, AutoBrigada autoBrigada, AutoBrigadir autoBrigadir) {
        this.id = id;
        this.autoPersonal = autoPersonal;
        this.autoDrivers = autoDrivers;
        this.autoBrigada = autoBrigada;
        this.autoBrigadir = autoBrigadir;
    }
}
