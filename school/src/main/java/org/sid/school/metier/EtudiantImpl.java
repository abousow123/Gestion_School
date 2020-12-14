package org.sid.school.metier;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.sid.school.Account.AccountService;
import org.sid.school.dao.EtudiantRepository;
import org.sid.school.dao.TuteurRepository;
import org.sid.school.dao.UserRepository;
import org.sid.school.entities.AgentUser;
import org.sid.school.entities.Etudiant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EtudiantImpl implements EtudiantService{

    @Autowired
    private EtudiantRepository etudiantRepository ;
    @Autowired
    private TuteurRepository tuteurRepository;
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
    public Etudiant saveEtudiant(MultipartFile file, String etudiant,String user) throws JsonParseException, JsonMappingException, IOException {
        Etudiant etudiant1 = new ObjectMapper().readValue(etudiant,Etudiant.class) ;
        AgentUser user1 = new ObjectMapper().readValue(etudiant,AgentUser.class) ;
        if(etudiant1 != null){
            if(file !=null)
                etudiant1.setPhoto(utilsService.modifyFileName(file));

            user1.setFirstName(etudiant1.getFirstName());
            user1.setLastName(etudiant1.getLastName());
            user1.setTel(etudiant1.getTel());
            user1.setUserActive(false);
            accountService.saveCompte(user1,user1.getPassword()) ;
        }

        return etudiantRepository.save(etudiant1);
    }

    @Override
    public boolean deleteEtudiant(String id) {
        return false;
    }

    @Override
    public Etudiant updateEtudiant(String id, Etudiant etudiant) {
        return null;
    }
}
