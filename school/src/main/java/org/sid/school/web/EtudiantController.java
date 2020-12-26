package org.sid.school.web;

import org.sid.school.dao.EtudiantRepository;
import org.sid.school.dao.TuteurRepository;
import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Tuteur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EtudiantController {

    @Autowired
    private EtudiantRepository etudiantRepository;
    @Autowired
    private TuteurRepository tuteurRepository;

    @GetMapping("/listEtudiants")
    public List<Etudiant> getEtudiants(){
        return etudiantRepository.findAll() ;
    }

    @GetMapping("/etudiant/{id}")
    public Optional<Etudiant> getEtudiant(@PathVariable("id") String id){
        Optional<Etudiant> e = etudiantRepository.findById(id) ;
        return e ;
    }


    @PostMapping("/saveEtudiant")
    public Etudiant saveEtudiant(@RequestBody Etudiant etudiant) throws Exception {
        tuteurRepository.save(etudiant.getTuteur());
        return etudiantRepository.save(etudiant);

    }
}
