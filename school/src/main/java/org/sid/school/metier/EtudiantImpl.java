package org.sid.school.metier;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.sid.school.Account.AccountService;
import org.sid.school.dao.EtudiantRepository;
import org.sid.school.dao.InscriptionRepository;
import org.sid.school.dao.TuteurRepository;
import org.sid.school.dao.UserRepository;
import org.sid.school.entities.AgentUser;
import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Inscription;
import org.sid.school.entities.Tuteur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class EtudiantImpl implements EtudiantService{

    @Autowired
    private EtudiantRepository etudiantRepository ;
    @Autowired
    private TuteurRepository tuteurRepository;
    @Autowired
    private InscriptionRepository inscriptionRepository ;
    @Autowired
    private UtilsService utilsService ;
    @Autowired
    private AccountService accountService;


    @Override
    public List<Etudiant> getEtudiants() {

        List<Etudiant> etudiants = etudiantRepository.findAll() ;
        List<Etudiant> realEtudiant = new ArrayList<>();
        for (Etudiant etudiant: etudiants){
            etudiant.setPhoto(utilsService.getPhoto(etudiant.getPhoto()));
            realEtudiant.add(etudiant);
        }
        return realEtudiant;
    }

    @Override
    public Optional<Etudiant> getEtudiant(String id) {

        Optional<Etudiant> etudiant =  etudiantRepository.findById(id);
        etudiant.get().setPhoto(utilsService.getPhoto(etudiant.get().getPhoto()));

        return etudiant ;
    }

    @Override
    @Transactional
    public Etudiant saveEtudiant(MultipartFile file, String etudiant) throws JsonParseException, JsonMappingException, IOException {

        Etudiant etudiant1 = new ObjectMapper().readValue(etudiant,Etudiant.class) ;

        if(etudiant1 != null){
            Etudiant etudiant2 = new Etudiant();

            etudiant1.setId(etudiant2.getId());
            etudiant2 = etudiant1 ;

            SimpleDateFormat formatter = new SimpleDateFormat("yyyy");
            String numEtudiant = formatter.format(new Date()) + UUID.randomUUID().toString().substring(0,4).toUpperCase();
            etudiant2.setNumStudent(numEtudiant);

            if(file !=null) etudiant2.setPhoto(utilsService.modifyFileName(file));

            AgentUser user1 = new AgentUser() ;
            user1.setFirstName(etudiant1.getFirstName());
            user1.setLastName(etudiant1.getLastName());
            user1.setTel(etudiant2.getTel());
            user1.setPassword("12345");
            user1.setLogin(etudiant1.getEmail());
            user1.setUserActive(false);
            accountService.saveCompte(user1,user1.getPassword()) ;

            Tuteur tuteur = new Tuteur();
            tuteur.setTypeTuteur(etudiant1.getTuteur().getTypeTuteur());
            tuteur.setNom(etudiant1.getTuteur().getNom());
            tuteur.setPrenom(etudiant1.getTuteur().getPrenom());
            tuteur.setTel(etudiant1.getTuteur().getTel());
            tuteur.setEmail(etudiant1.getTuteur().getEmail());

            Etudiant e = etudiantRepository.save(etudiant2) ;
            tuteurRepository.save(tuteur) ;
            return e ;
        }
        return  null ;
    }

    @Override
    public boolean deleteEtudiant(String id) {
        return false;
    }

    @Override
    @Transactional
    public Etudiant updateEtudiant(String id, Etudiant etudiant) {
        etudiant.setId(id);
        return etudiantRepository.saveAndFlush(etudiant);
    }

    @Override
    @Transactional
    public Inscription getInscriptionbyStudent(String idStudent) {
        Inscription inscription = inscriptionRepository.findByStudent(idStudent);
        if(inscription != null){
            return inscription;
        }
        return null;
    }

    @Override
    public List<Etudiant> getInscriptionByFilter(Specification<Inscription> search) {

        List<Inscription> inscriptions = inscriptionRepository.findAll(Specification.where(search));
        List<Etudiant> etudiants = new ArrayList<>();
        if(inscriptions != null){
            for (Inscription inscription : inscriptions){
                Etudiant etudiant = inscription.getEtudiant() ;
                etudiant.setPhoto(utilsService.getPhoto(etudiant.getPhoto()));
                etudiants.add(etudiant);
            }
            return etudiants;
        }else {
            etudiants = etudiantRepository.findAll() ;
            List<Etudiant> realEtudiant = new ArrayList<>();
            for (Etudiant etudiant: etudiants){
                etudiant.setPhoto(utilsService.getPhoto(etudiant.getPhoto()));
                realEtudiant.add(etudiant);
            }
            return realEtudiant;
        }

    }

}
