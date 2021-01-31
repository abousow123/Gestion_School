package org.sid.school.metier;

import com.fasterxml.jackson.databind.JsonMappingException;
import org.sid.school.entities.Classe;
import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Inscription;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface InscriptionService {
    List<Inscription> getInscription() ;
    public Inscription postInscription(String etudiant,String programme,String classe) throws JsonParseException, JsonMappingException, IOException;
    public Inscription getInscriptionByStudent(String idStudent);

}
