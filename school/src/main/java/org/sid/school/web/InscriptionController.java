package org.sid.school.web;

import org.sid.school.entities.Classe;
import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Inscription;
import org.sid.school.metier.ClasseService;
import org.sid.school.metier.InscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
public class InscriptionController {

    @Autowired
    private InscriptionService inscriptionService;

    @GetMapping("/listinscrt")
    public List<Inscription> getInscription()  {
        return inscriptionService.getInscription() ;

    }

    @GetMapping("/inscription/{idStudent}")
    public Inscription getByStudent(@PathVariable("idStudent") String idStudent){
        Inscription inscription = inscriptionService.getInscriptionByStudent(idStudent);
//        System.out.println("test Ins====> "+inscription.getEtudiant().getEmail());
        return inscription;
    }

    @PostMapping("/saveInscription")
    public Inscription saveInscription(@RequestParam("etudiant") String etudiant,@RequestParam("classe") String classe,
                                       @RequestParam("programme") String programme) throws Exception {
        return inscriptionService.postInscription(etudiant,programme,classe) ;
    }

    @PutMapping("/updateInscription/{id}")
    public Inscription updateInscription(@PathVariable("id") Long id, @RequestBody Inscription inscription){
        return inscriptionService.updateInscription(id,inscription) ;
    }
}
