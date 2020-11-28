package org.sid.school.web;

import org.sid.school.entities.Etudiant;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EtudiantController {



    @GetMapping("/saveEtudiant")
    public Etudiant saveEtudiant(@RequestBody Etudiant etudiant){


        return  null;
    }
}
