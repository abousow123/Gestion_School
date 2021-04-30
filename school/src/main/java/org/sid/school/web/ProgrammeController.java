package org.sid.school.web;

import org.sid.school.entities.Programme;
import org.sid.school.metier.ProgrammeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ProgrammeController {

    @Autowired
    private ProgrammeService programmeService ;

    @PostMapping("/saveProgramme")
    public Programme saveProgramme(@RequestBody Programme programme){
        return programmeService.saveProgramme(programme);
    }

    @PutMapping("/updateProgramme/{id}")
    public Programme updateProgramme(@PathVariable("id") Long id, @RequestBody Programme programme){
        return  programmeService.updateProgramme(id,programme);
    }
}
