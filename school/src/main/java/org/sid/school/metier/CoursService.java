package org.sid.school.metier;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.sid.school.entities.Cours;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface CoursService {
    public Cours postCours(MultipartFile file, String cours, String programme) throws JsonParseException, JsonMappingException, IOException;
    public List<Cours> getCours();
}
