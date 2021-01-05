package org.sid.school.web;

import org.sid.school.dao.EtudiantRepository;
import org.sid.school.dao.TuteurRepository;
import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Tuteur;
import org.sid.school.metier.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
public class EtudiantController {

    @Autowired
    private EtudiantRepository etudiantRepository;
    @Autowired
    private TuteurRepository tuteurRepository;
    @Autowired
    private EtudiantService etudiantService ;

    @GetMapping("/listEtudiants")
    public List<Etudiant> getEtudiants(){
        return etudiantService.getEtudiants() ;
    }

    @GetMapping("/etudiant/{id}")
    public Optional<Etudiant> getEtudiant(@PathVariable("id") String id){
        return etudiantService.getEtudiant(id);
    }


    @PostMapping("/saveEtudiant")
    public Etudiant saveEtudiant(@RequestParam("file1") MultipartFile file, @RequestParam("etudiant") String etudiant) throws Exception {
        return etudiantService.saveEtudiant(file,etudiant) ;

    }
}
