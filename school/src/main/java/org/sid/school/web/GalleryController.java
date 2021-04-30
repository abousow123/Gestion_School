package org.sid.school.web;

import org.sid.school.entities.Gallery;
import org.sid.school.metier.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
public class GalleryController {

    @Autowired
    GalleryService galleryService;

    @PostMapping("/saveGallery")
    public Gallery saveGallery(@RequestParam("photoGallery") MultipartFile photoGallery, @RequestParam("gallery") String gallery, @RequestParam("pictures")List<MultipartFile> pictures)
            throws IOException {
        return galleryService.postGallery(pictures,photoGallery,gallery) ;
    }

}
