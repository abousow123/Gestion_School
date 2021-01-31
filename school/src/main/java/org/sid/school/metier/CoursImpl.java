package org.sid.school.metier;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.sid.school.dao.CoursRepository;
import org.sid.school.dao.ProgrammeRepository;
import org.sid.school.entities.Cours;
import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Programme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CoursImpl implements CoursService{

    @Autowired
    private CoursRepository coursRepository ;
    @Autowired
    private ProgrammeRepository programmeRepository;
    @Autowired
    private UtilsService utilsService ;

    @Override
    @Transactional
    public Cours postCours(MultipartFile file, String cours, String programme) throws JsonParseException, JsonMappingException, IOException {

        Cours cours1 = new ObjectMapper().readValue(cours, Cours.class) ;
        Programme programme1 = new ObjectMapper().readValue(programme, Programme.class) ;
        if(file != null) cours1.setFile(utilsService.modifyFileNameFichier(file));
        cours1.setProgramme(programme1);
        cours1.setDate_cours(new Date());

        return coursRepository.save(cours1) ;

    }

    @Override
    public List<Cours> getCours() {
        List<Cours> cours = coursRepository.findAll();
        List<Cours> realCours = new ArrayList<>();
        for(Cours cours1: cours){
            cours1.setFile(utilsService.getFile(cours1.getFile()));
            realCours.add(cours1);
        }
        return realCours;
    }

    @Override
    @Transactional
    public Cours updateCours(Long id, Cours cours) {
        cours.setId(id);
        //Programme p = programmeRepository.getOne(cours.getProgramme().getId());
        //cours.setProgramme(p);
        return coursRepository.saveAndFlush(cours) ;
    }
}
