package org.sid.school.dao;

import org.sid.school.entities.Cours;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CoursRepository extends JpaRepository<Cours, String> {
}
