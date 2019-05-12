package com.spring.db.repository;

import com.spring.db.model.AutoDrivers;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AutoDriverRepository extends CrudRepository<AutoDrivers, Integer> {
    Iterable<AutoDrivers> findAll();

    @Query(value = "SELECT * FROM auto_drivers WHERE auto_drivers.id_auto = :auto", nativeQuery = true)
    List<AutoDrivers> byAuto(@Param("auto") String auto);
}
