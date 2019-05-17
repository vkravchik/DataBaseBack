package com.spring.db.repository;

import com.spring.db.model.AutoSaleBuy;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;

public interface AutoSaleBuyRepository extends CrudRepository<AutoSaleBuy, Integer> {
    @Query(value = "SELECT * FROM `auto_sale_buy` WHERE sale_buy = :status " +
            "AND date BETWEEN :date_start AND :date_finish", nativeQuery = true)
    Iterable<AutoSaleBuy> findAllByPeriod(@Param("status") int status,
                                          @Param("date_start")LocalDate date_start,
                                          @Param("date_finish")LocalDate date_finish);
}
