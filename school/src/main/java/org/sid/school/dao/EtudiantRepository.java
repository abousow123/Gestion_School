package org.sid.school.dao;

import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Inscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface EtudiantRepository extends JpaRepository<Etudiant, String> {
    @Query("select i from Inscription i where i.etudiant.numStudent = :numStudent OR i.etudiant.firstName like :firstName OR i.programme.code_programme = :code_programme OR i.classe.code = :code")
    public List<Inscription> findAllByFilter(@Param("numStudent")String numStudent, @Param("firstName")String firstName, @Param("code_programme")String code_programme, @Param("code")String code) ;
}
