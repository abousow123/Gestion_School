package org.sid.school.dao;

import org.sid.school.entities.Classe;
import org.sid.school.entities.Gallery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface GalleryRepository extends JpaRepository<Gallery, Long> {
}
