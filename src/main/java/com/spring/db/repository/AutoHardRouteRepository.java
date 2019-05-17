package com.spring.db.repository;

import com.spring.db.model.AutoHardRoute;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;

public interface AutoHardRouteRepository extends CrudRepository<AutoHardRoute, Integer> {
    @Query(value = "SELECT * FROM `auto_hard_route` \n" +
            "INNER JOIN auto_auto ON auto_hard_route.id_auto = auto_auto.id\n" +
            "WHERE auto_auto.id = :auto_id AND auto_hard_route.date_finish <= :cur_date", nativeQuery = true)
    Iterable<AutoHardRoute> findAllByAutoAndDate(
            @Param("auto_id") String auto_id,
            @Param("cur_date")LocalDate cur_date
    );
}
