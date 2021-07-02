package org.sid.school.dao;

import org.sid.school.entities.Agenda;
import org.sid.school.entities.Classe;
import org.sid.school.entities.Gallery;
import org.sid.school.entities.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface GalleryRepository extends JpaRepository<Gallery, Long> {

}
