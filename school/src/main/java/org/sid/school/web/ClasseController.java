package org.sid.school.web;

import org.sid.school.entities.Classe;
import org.sid.school.metier.ClasseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ClasseController {

    @Autowired
    private ClasseService classeService;

    @PostMapping("/saveClasse")
    public ResponseEntity<Classe> saveClasse(@RequestBody Classe classe) throws IOException {

        return classeService.postClasse(classe) ;

    }
}
