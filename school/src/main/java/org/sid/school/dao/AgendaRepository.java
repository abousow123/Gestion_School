package org.sid.school.dao;

import org.sid.school.entities.Agenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource

public interface AgendaRepository extends JpaRepository<Agenda, Long> {

    @Query("select a from Agenda a where a.user.id = ?1")
    public List<Agenda> findByUser(String idUser) ;
}
