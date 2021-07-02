package org.sid.school.metier;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.sid.school.dao.GalleryRepository;
import org.sid.school.dao.PictureRepository;
import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Gallery;
import org.sid.school.entities.Picture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GalleryImpl implements GalleryService{

    @Autowired
    private GalleryRepository galleryRepository;
    @Autowired
    private PictureRepository pictureRepository;
    @Autowired
    private UtilsService utilsService;

    
    @Override
    public Gallery postGallery(List<MultipartFile> images, MultipartFile photoGallery, String galery) throws JsonParseException, JsonMappingException, IOException {

        Gallery gallery = new ObjectMapper().readValue(galery, Gallery.class) ;
        if(photoGallery != null){
             gallery.setPhoto(utilsService.modifyFileName(photoGallery));
        }

        Gallery gallery1 = galleryRepository.save(gallery);

        if(images != null && images.size() > 0){
            for(MultipartFile file: images){
                Picture picture = new Picture();
                picture.setGallery(gallery1);
                picture.setPhotoName(utilsService.modifyFileName(file));
                pictureRepository.save(picture);
            }
        }
        return gallery1;
    }

    @Override
    public List<Picture> listGallery() {
        List<Picture> pictures = pictureRepository.findAll() ;
        List<Picture> realPic = new ArrayList<>();
        for (Picture p: pictures){
            p.setPhotoName(utilsService.getPhoto(p.getPhotoName()));
            realPic.add(p);
        }
        return realPic;
    }

    @Override
    public List<Picture> listPicturesByGallery(Long id) {
        List<Picture> pictures = pictureRepository.findAllPicturesByGallery(id) ;
        List<Picture> realPic = new ArrayList<>();
        for (Picture p: pictures){
            p.setPhotoName(utilsService.getPhoto(p.getPhotoName()));
            realPic.add(p);
        }
        return realPic;
    }

    @Override
    public Optional<Gallery> getGallery(Long id) {
        Optional<Gallery> gallery = galleryRepository.findById(id);
        gallery.get().setPhoto(utilsService.getPhoto(gallery.get().getPhoto()));

        System.out.println("test ====================================================");
        /*List<Picture> pictureList = pictureRepository.findAllPicturesByGallery((long) gallery.get().getId());
        if(pictureList!=null){
            List<Picture> realPic = new ArrayList<>();
            for(Picture p: pictureRepository.findAllPicturesByGallery((long) gallery.get().getId())){
                p.setPhotoName(utilsService.getPhoto(p.getPhotoName()));
                realPic.add(p);
            }
            gallery.get().setPictures(realPic);
        }*/

        return gallery;
    }
}
