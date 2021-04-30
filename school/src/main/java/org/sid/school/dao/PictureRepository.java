package org.sid.school.dao;

import org.sid.school.entities.Classe;
import org.sid.school.entities.Inscription;
import org.sid.school.entities.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource

public interface PictureRepository extends JpaRepository<Picture, Long> {

    @Query("select p from Picture p where p.gallery.id = ?1")
    public List<Picture> findAllPicturesByGallery(Long idGallery) ;
}
