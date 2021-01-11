package org.sid.school.metier;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.sid.school.dao.InscriptionRepository;
import org.sid.school.entities.Classe;
import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Inscription;
import org.sid.school.entities.Programme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.Date;
import java.util.List;

@Service
public class InscriptionImpl implements InscriptionService{

    @Autowired
    InscriptionRepository inscriptionRepository ;
    @Autowired
    EtudiantService etudiantService;

    @Override
    public List<Inscription> getInscription() {
        return inscriptionRepository.findAll() ;
    }

    @Override
    @Transactional
    public Inscription postInscription(String etudiant, String programme, String classe) throws JsonParseException, JsonMappingException, IOException {
        Etudiant  etudiant1 = new ObjectMapper().readValue(etudiant,Etudiant.class) ;
        Classe classe1 =  new ObjectMapper().readValue(classe,Classe.class) ;
        Programme programme1 = new ObjectMapper().readValue(programme,Programme.class) ;

        Inscription inscription = new Inscription();
        inscription.setDateInscrit(new Date());
        inscription.setEtudiant(etudiant1);
        inscription.setClasse(classe1);
        inscription.setProgramme(programme1);

        if(etudiant1.isFeesPays()){
            return inscriptionRepository.save(inscription) ;
        }
        return null ;

    }
}
