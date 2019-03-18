package com.spring.db.model;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;

@Entity
@Table(name = "auto_prop")
public class AutoProp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

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

    public AutoCategory getAutoCategory() {
        return autoCategory;
    }

    public void setAutoCategory(AutoCategory autoCategory) {
        this.autoCategory = autoCategory;
    }

    public AutoProp() {
    }

    public AutoProp(Integer id, String name, AutoCategory autoCategory) {
        this.id = id;
        this.name = name;
        this.autoCategory = autoCategory;
    }
}
