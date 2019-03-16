package com.spring.db.repository;

import com.spring.db.model.AutoDrivers;
import org.springframework.data.repository.CrudRepository;

public interface AutoDriverRepository extends CrudRepository<AutoDrivers, Integer> {
}
