package org.sid.school.web;

import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Gallery;
import org.sid.school.entities.Picture;
import org.sid.school.metier.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
public class GalleryController {

    @Autowired
    GalleryService galleryService;

    @PostMapping("/saveGallery")
    public Gallery saveGallery(@RequestParam("photoGallery") MultipartFile photoGallery, @RequestParam("gallery") String gallery)
            throws IOException {
        return galleryService.postGallery(photoGallery,gallery) ;
    }

    @PostMapping("/savePicture")
    public void savePicture(@RequestParam("picture") MultipartFile picture, @RequestParam("gallery1") String gallery1)
            throws IOException {
        galleryService.postPicture(picture, gallery1);
    }

    @GetMapping("/listPictures")
    public List<Picture> getEtudiants(){
        return galleryService.listGallery() ;
    }

    @GetMapping("/picturesByGallery/{id}")
    public List<Picture> getPicturesByGallery(@PathVariable("id") Long id){
        return galleryService.listPicturesByGallery(id);
    }

    @GetMapping("/oneGallery/{id}")
    public Optional<Gallery> getGallery(@PathVariable("id") Long id){
        return galleryService.getGallery(id);
    }

}
