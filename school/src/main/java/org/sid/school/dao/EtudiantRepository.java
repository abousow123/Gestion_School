package org.sid.school.dao;

import org.sid.school.entities.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


public interface EtudiantRepository extends JpaRepository<Etudiant, String> {
}
