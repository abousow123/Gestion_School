package org.sid.school.web;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.sid.school.entities.Cours;
import org.sid.school.metier.CoursService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
public class CoursController {

    @Autowired
    private CoursService coursService;

    @PostMapping("/saveCours")
    public Cours postCours(@RequestParam("file") MultipartFile file, @RequestParam("cours") String cours, @RequestParam("programme") String programme)
            throws JsonParseException, JsonMappingException, IOException {
        return coursService.postCours(file,cours,programme);
    }

    @GetMapping("/listCours")
    public List<Cours> getCours(){
        return coursService.getCours();
    }

    @PutMapping("/updateCours/{id}")
    public Cours updateCours(@PathVariable("id") Long id, @RequestBody Cours cours){
        return coursService.updateCours(id,cours) ;
    }
}
