package org.sid.school.metier;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Inscription;
import org.springframework.boot.json.JsonParseException;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;


public interface EtudiantService {

    public List<Etudiant> getEtudiants();
    public Optional<Etudiant> getEtudiant(String id);
    public Etudiant saveEtudiant(MultipartFile file, String etudiant) throws JsonParseException, JsonMappingException, IOException;
    public boolean deleteEtudiant(String id);
    public Etudiant updateEtudiant(String id, Etudiant etudiant) ;
    public Inscription getInscriptionbyStudent(String idStudent) ;
    public List<Etudiant> getInscriptionByFilter(Specification<Inscription> search) ;


}
