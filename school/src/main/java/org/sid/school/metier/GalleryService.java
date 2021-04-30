package org.sid.school.metier;

import com.fasterxml.jackson.databind.JsonMappingException;
import org.sid.school.entities.Gallery;
import org.springframework.boot.json.JsonParseException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface GalleryService {

    Gallery postGallery(List<MultipartFile> images ,MultipartFile photoGallery, String galery) throws JsonParseException, JsonMappingException, IOException;
    List<Gallery>  listGallery();
    Optional<Gallery> getGallery(Long id);
}
