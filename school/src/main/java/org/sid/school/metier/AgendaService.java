package org.sid.school.metier;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.sid.school.entities.Agenda;

import java.util.List;

public interface AgendaService {
    List<Agenda> getAgendas();
    List<Agenda> getAgendaByUser(String idUser);
    Agenda saveAgenda(String agenda) throws JsonProcessingException;
    Agenda updateAgenda(Agenda agenda);
}
