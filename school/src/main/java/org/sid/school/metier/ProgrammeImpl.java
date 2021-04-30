package org.sid.school.metier;

import org.sid.school.dao.ProgrammeRepository;
import org.sid.school.entities.Programme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ProgrammeImpl implements ProgrammeService{

    @Autowired
    private ProgrammeRepository programmeRepository;

    @Override
    public Programme saveProgramme(Programme programme) {
        if(programme != null){
            programme.setDate_created(new Date());
            return programmeRepository.save(programme);
        }
        return null;
    }

    @Override
    public Programme updateProgramme(Long id, Programme programme) {
        programme.setId(id);
        return programmeRepository.saveAndFlush(programme);
    }
}
