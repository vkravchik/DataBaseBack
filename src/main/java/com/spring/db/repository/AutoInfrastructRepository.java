package com.spring.db.repository;

import com.spring.db.model.AutoInfrastruct;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

public interface AutoInfrastructRepository extends CrudRepository<AutoInfrastruct, Integer> {
    @Query(value = "SELECT * FROM auto_infrastruct WHERE name = 'Гараж'", nativeQuery = true)
    Iterable<AutoInfrastruct> findAllGarage();

    @Query(value = "SELECT * FROM auto_infrastruct\n" +
            "INNER JOIN auto_category ON auto_category.id = auto_infrastruct.id_category\n" +
            "WHERE auto_infrastruct.name = 'Гараж' OR auto_infrastruct.name = 'Garage' AND auto_category.name = :category", nativeQuery = true)
    Iterable<AutoInfrastruct> findAllGarageByCategory(@Param("category") String category);
}
