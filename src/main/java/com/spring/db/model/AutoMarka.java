package com.spring.db.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "auto_marka")
public class AutoMarka {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;
    private String name;

    @OneToMany( mappedBy = "autoMarka" )
    private List<Auto> autos;

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

    public AutoMarka(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public AutoMarka() {
    }
}
