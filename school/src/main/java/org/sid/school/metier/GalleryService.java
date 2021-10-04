package org.sid.school.metier;

import com.fasterxml.jackson.databind.JsonMappingException;
import org.sid.school.entities.Gallery;
import org.sid.school.entities.Picture;
import org.springframework.boot.json.JsonParseException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface GalleryService {

    Gallery postGallery(MultipartFile photoGallery, String galery) throws JsonParseException, JsonMappingException, IOException;
    void postPicture(MultipartFile picture, String galery) throws JsonParseException, JsonMappingException, IOException;
    List<Picture>  listGallery();
    List<Picture>  listPicturesByGallery(Long id);
    Optional<Gallery> getGallery(Long id);
    Gallery updateGallery(Long id, Gallery gallery);
}
