package org.sid.school.web;

import org.sid.school.entities.Classe;
import org.sid.school.metier.ClasseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
public class ClasseController {

    @Autowired
    private ClasseService classeService;

    @PostMapping("/saveClasse")
    public Classe saveClasse(@RequestBody Classe classe) throws IOException {
        return classeService.postClasse(classe) ;

    }

    @PutMapping("/editClasse/{id}")
    public Classe updateClasse(@PathVariable("id") Long id, @RequestBody Classe classe){
        return classeService.updateClasse(id,classe);
    }
}
