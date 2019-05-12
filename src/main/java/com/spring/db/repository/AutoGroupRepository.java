package com.spring.db.repository;

import com.spring.db.model.AutoGroup;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface AutoGroupRepository extends CrudRepository<AutoGroup, Integer> {
    Iterable<AutoGroup> findAll();
}
