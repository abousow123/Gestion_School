package org.sid.school.web;

import com.sipios.springsearch.anotation.SearchSpec;
import org.sid.school.dao.EtudiantRepository;
import org.sid.school.dao.TuteurRepository;
import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Inscription;
import org.sid.school.entities.Tuteur;
import org.sid.school.metier.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
public class EtudiantController {

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

    @GetMapping("/listEtudiantsByFilter")
    public List<Etudiant> getEtudiantByFilter(@SearchSpec Specification<Inscription> specs){
        return etudiantService.getInscriptionByFilter(specs) ;

    }


    @PostMapping("/saveEtudiant")
    public Etudiant saveEtudiant(@RequestParam("file1") MultipartFile file, @RequestParam("etudiant") String etudiant) throws Exception {
        return etudiantService.saveEtudiant(file,etudiant) ;
    }

    @PutMapping("/editEtudiant/{id}")
    public Etudiant editEtudiant(@PathVariable("id") String id, @RequestBody Etudiant etudiant) throws Exception {
        return etudiantService.updateEtudiant(id,etudiant) ;
    }

    @GetMapping("/registreStudent/{idStudent}")
    public Inscription getInscription(@PathVariable("idStudent") String idStudent){
        return etudiantService.getInscriptionbyStudent(idStudent) ;
    }
}
