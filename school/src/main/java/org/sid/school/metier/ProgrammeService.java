package org.sid.school.metier;

import org.sid.school.entities.Programme;

public interface ProgrammeService {

    Programme saveProgramme(Programme programme);
    Programme updateProgramme(Long id, Programme programme);
}
