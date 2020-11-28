package org.sid.school.dao;

import org.sid.school.entities.Tuteur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin("*")
public interface TuteurRepository extends JpaRepository<Tuteur,String> {
}
