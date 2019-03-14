package com.spring.db.repository;

import com.spring.db.model.Driver;
import org.springframework.data.repository.CrudRepository;

public interface DriverRepository extends CrudRepository<Driver, Integer> {
}
