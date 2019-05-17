package com.spring.db.repository;

import com.spring.db.model.AutoGroup;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface AutoGroupRepository extends CrudRepository<AutoGroup, Integer> {
    Iterable<AutoGroup> findAll();

    @Query(value = "SELECT * FROM auto_group WHERE auto_group.id_brigadir = :id", nativeQuery = true)
    Iterable<AutoGroup> findAllByBrigadir(@Param("id")String id);
}
