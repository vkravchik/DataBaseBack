package com.spring.db.model;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "auto_sale_buy")
public class AutoSaleBuy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_auto")
    private Auto auto;
    private Date date;
    private Boolean sale_buy;
    private Integer price;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public Boolean getSale_buy() {
        return sale_buy;
    }

    public void setSale_buy(Boolean sale_buy) {
        this.sale_buy = sale_buy;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public AutoSaleBuy() {
    }

    public AutoSaleBuy(Integer id, Auto auto, Date date, Boolean sale_buy, Integer price) {
        this.id = id;
        this.auto = auto;
        this.date = date;
        this.sale_buy = sale_buy;
        this.price = price;
    }
}
