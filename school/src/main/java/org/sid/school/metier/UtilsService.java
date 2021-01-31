package org.sid.school.metier;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface UtilsService {
    public String getPhoto(String fileName);
    public String modifyFileName(MultipartFile file) throws JsonParseException, JsonMappingException, IOException;

    public String getFile(String fileName);
    public String modifyFileNameFichier(MultipartFile file) throws JsonParseException, JsonMappingException, IOException;
}
