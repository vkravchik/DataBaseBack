package com.spring.db.repository;

import com.spring.db.model.Auto;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AutoRepository extends CrudRepository<Auto, Integer> {
    Iterable<Auto> findAll();
}
