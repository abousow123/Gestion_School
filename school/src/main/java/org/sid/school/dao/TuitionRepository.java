package org.sid.school.dao;

import org.sid.school.entities.Tuition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface TuitionRepository extends JpaRepository<Tuition, Long> {
}
