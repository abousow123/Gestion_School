package org.sid.school.metier;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.sid.school.entities.Classe;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ClasseService {
    ResponseEntity<Classe> postClasse( Classe classe) throws JsonParseException, JsonMappingException, IOException;
}
