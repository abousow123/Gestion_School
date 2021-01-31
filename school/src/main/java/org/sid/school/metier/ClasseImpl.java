package org.sid.school.metier;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.sid.school.dao.ClasseRepository;
import org.sid.school.entities.Classe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;

@Service
public class ClasseImpl  implements ClasseService{

    @Autowired
    ClasseRepository classeRepository;

    @Override
    public Classe postClasse(Classe classe) throws JsonParseException, JsonMappingException, IOException {
        if(classe!=null){
            classe.setDate_created(new Date());
            return classeRepository.save(classe) ;
        }
        else {
            return null;
        }

    }

    @Override
    public Classe updateClasse(Long id, Classe classe) {
        classe.setId(id);
        return classeRepository.saveAndFlush(classe);
    }
}
