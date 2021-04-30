package org.sid.school.metier;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.sid.school.dao.AgendaRepository;
import org.sid.school.entities.Agenda;
import org.sid.school.entities.AgentUser;
import org.sid.school.entities.Etudiant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgendaImpl implements AgendaService{

    @Autowired
    AgendaRepository agendaRepository;

    @Override
    public List<Agenda> getAgendas() {
        return agendaRepository.findAll();
    }

    @Override
    public List<Agenda> getAgendaByUser(String idUser) {
        return agendaRepository.findByUser(idUser);
    }

    @Override
    public Agenda saveAgenda(String agenda) throws JsonProcessingException {

        Agenda agenda1 = new ObjectMapper().readValue(agenda,Agenda.class) ;
        //AgentUser user1 = new ObjectMapper().readValue(user,AgentUser.class) ;

        //agenda1.setAgentUser(user1);

        if(agenda1 != null){
            return agendaRepository.save(agenda1);
        }
        else {
            return null;
        }
    }

    @Override
    public Agenda updateAgenda(Agenda agenda) {
        agenda.setId(agenda.getId());
        return agendaRepository.saveAndFlush(agenda);
    }
}
