package org.sid.school.metier;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.sid.school.entities.Classe;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class ClasseImpl  implements ClasseService{

    @Override
    public ResponseEntity<Classe> postClasse(Classe classe) throws JsonParseException, JsonMappingException, IOException {

        return new ResponseEntity<Classe>(classe, HttpStatus.OK);
    }
}
