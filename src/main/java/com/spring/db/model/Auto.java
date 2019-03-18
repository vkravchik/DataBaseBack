package com.spring.db.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "auto_auto")
public class Auto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_category")
    private AutoCategory autoCategory;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "id_marka")
    private AutoMarka autoMarka;

    public Auto() {
    }

    public Auto(Integer id, AutoCategory autoCategory, AutoMarka autoMarka) {
        this.id = id;
        this.autoCategory = autoCategory;
        this.autoMarka = autoMarka;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public AutoCategory getAutoCategory() {
        return autoCategory;
    }

    public void setAutoCategory(AutoCategory autoCategory) {
        this.autoCategory = autoCategory;
    }

    public AutoMarka getAutoMarka() {
        return autoMarka;
    }

    public void setAutoMarka(AutoMarka autoMarka) {
        this.autoMarka = autoMarka;
    }
}
