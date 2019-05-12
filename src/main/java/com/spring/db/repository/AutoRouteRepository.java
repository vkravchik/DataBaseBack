package com.spring.db.repository;

import com.spring.db.model.AutoRoute;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AutoRouteRepository extends CrudRepository<AutoRoute, Integer> {
    List<AutoRoute> findAll();
}
