package org.sid.school.dao;

import org.sid.school.entities.Programme;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin("*")
public interface ProgrammeRepository extends JpaRepository<Programme, Long> {
}
