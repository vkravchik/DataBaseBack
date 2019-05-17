package com.spring.db.repository;

import com.spring.db.model.AutoRepair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface AutoRepairRepository extends JpaRepository<AutoRepair, Integer> {
    @Query(value = "SELECT * FROM `auto_repair`\n" +
            "INNER JOIN auto_auto ON auto_repair.id_auto = auto_auto.id\n" +
            "INNER JOIN auto_category ON auto_auto.id_category = auto_category.id\n" +
            "WHERE auto_category.name = :category", nativeQuery = true)
    List<AutoRepair> findByCategory(@Param("category") String category);

    @Query(value = "SELECT * FROM `auto_repair`\n" +
            "INNER JOIN auto_auto ON auto_repair.id_auto = auto_auto.id\n" +
            "INNER JOIN auto_marka ON auto_auto.id_marka = auto_marka.id\n" +
            "WHERE auto_marka.name = :marka", nativeQuery = true)
    List<AutoRepair> findByMarka(@Param("marka") String marka);

    @Query(value = "SELECT * FROM `auto_repair`\n" +
            "INNER JOIN auto_auto ON auto_repair.id_auto = auto_auto.id\n" +
            "INNER JOIN auto_marka ON auto_auto.id_marka = auto_marka.id\n" +
            "WHERE auto_repair.id_auto = ?1", nativeQuery = true)
    List<AutoRepair> findByAuto(int auto);

    @Query(value = "SELECT * FROM `auto_repair` \n" +
            "INNER JOIN auto_ptoblem ON auto_repair.id_problem = auto_ptoblem.id\n" +
            "INNER JOIN auto_auto ON auto_repair.id_auto = auto_auto.id\n" +
            "INNER JOIN auto_category ON auto_auto.id_category = auto_category.id\n" +
            "WHERE auto_category.name = :carType AND auto_ptoblem.name = :detail", nativeQuery = true)
    Iterable<AutoRepair> findAllByCarTypeAndDetail(@Param("carType") String carType,
                                                   @Param("detail") String detail);

    @Query(value = "SELECT * FROM `auto_repair` \n" +
            "WHERE id_personal = :person AND date BETWEEN :date_start AND :date_finish", nativeQuery = true)
    Iterable<AutoRepair> findAllByPersonAndDate(@Param("person") int person,
                                                @Param("date_start") LocalDate date_start,
                                                @Param("date_finish")LocalDate date_finish);

    @Query(value = "SELECT * FROM `auto_repair` \n" +
            "WHERE id_personal = :person AND date BETWEEN :date_start " +
            "AND :date_finish AND id_auto = :auto", nativeQuery = true)
    Iterable<AutoRepair> findAllByPersonAndDateAndAuto(@Param("person") int person,
                                                       @Param("auto") int auto,
                                                       @Param("date_start") LocalDate date_start,
                                                       @Param("date_finish")LocalDate date_finish);
}
