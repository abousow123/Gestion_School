package org.sid.school.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.sid.school.entities.Agenda;
import org.sid.school.metier.AgendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AgendaController {

    @Autowired
    AgendaService agendaService;

    @PostMapping("/saveAgenda")
    public Agenda saveAgenda(@RequestParam("agenda") String agenda) throws JsonProcessingException {
        return agendaService.saveAgenda(agenda);
    }

    @GetMapping("/agendaList")
    public List<Agenda> getAgendas(){
        return agendaService.getAgendas() ;
    }

    @GetMapping("/agendaListByUser/{idUser}")
    public List<Agenda> getAgendasByUser(@PathVariable("idUser") String idUser){
        return agendaService.getAgendaByUser(idUser) ;
    }

}
