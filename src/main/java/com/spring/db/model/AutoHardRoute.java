package com.spring.db.model;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "auto_hard_route")
public class AutoHardRoute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String point_start;
    private String point_finish;
    private Date date_start;
    private Date date_finish;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_auto")
    private Auto auto;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPoint_start() {
        return point_start;
    }

    public void setPoint_start(String point_start) {
        this.point_start = point_start;
    }

    public String getPoint_finish() {
        return point_finish;
    }

    public void setPoint_finish(String point_finish) {
        this.point_finish = point_finish;
    }

    public Date getDate_start() {
        return date_start;
    }

    public void setDate_start(Date date_start) {
        this.date_start = date_start;
    }

    public Date getDate_finish() {
        return date_finish;
    }

    public void setDate_finish(Date date_finish) {
        this.date_finish = date_finish;
    }

    public Auto getAuto() {
        return auto;
    }

    public void setAuto(Auto auto) {
        this.auto = auto;
    }

    public AutoHardRoute() {
    }

    public AutoHardRoute(Integer id, String point_start, String point_finish, Date date_start, Date date_finish, Auto auto) {
        this.id = id;
        this.point_start = point_start;
        this.point_finish = point_finish;
        this.date_start = date_start;
        this.date_finish = date_finish;
        this.auto = auto;
    }
}
