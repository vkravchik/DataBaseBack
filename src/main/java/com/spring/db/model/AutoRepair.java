package com.spring.db.model;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "auto_repair")
public class AutoRepair {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_problem")
    private AutoProblem autoProblem;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_auto")
    private Auto auto;
    private Date date;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_personal")
    private AutoPersonal autoPersonal;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @NotFound(action = NotFoundAction.IGNORE)
//    @JoinColumn(name = "id_category")
//    private AutoCategory autoCategory;

    private String price;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public AutoProblem getAutoProblem() {
        return autoProblem;
    }

    public void setAutoProblem(AutoProblem autoProblem) {
        this.autoProblem = autoProblem;
    }

    public Auto getAuto() {
        return auto;
    }

    public void setAuto(Auto auto) {
        this.auto = auto;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public AutoPersonal getAutoPersonal() {
        return autoPersonal;
    }

    public void setAutoPersonal(AutoPersonal autoPersonal) {
        this.autoPersonal = autoPersonal;
    }

//    public AutoCategory getAutoCategory() {
//        return autoCategory;
//    }

//    public void setAutoCategory(AutoCategory autoCategory) {
//        this.autoCategory = autoCategory;
//    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public AutoRepair() {
    }

    public AutoRepair(Integer id, AutoProblem autoProblem, Auto auto, Date date, AutoPersonal autoPersonal, String price) {
        this.id = id;
        this.autoProblem = autoProblem;
        this.auto = auto;
        this.date = date;
        this.autoPersonal = autoPersonal;
//        this.autoCategory = autoCategory;
        this.price = price;
    }
}
