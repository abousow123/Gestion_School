package org.sid.school.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Agenda implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id ;

    private String Subject;
    private String Location;
    private String name;
    private String telephone;
    private String Description;
    private Date StartTime;
    private Date EndTime;
    private Boolean IsAllDay;

    //relation
    @ManyToOne(cascade = CascadeType.ALL)
    AgentUser user;

    public Agenda() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public String getSubject() {
        return Subject;
    }

    public void setSubject(String Subject) {
        Subject = Subject;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String location) {
        this.Location = location;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        this.Description = description;
    }

    public Date getStartTime() {
        return StartTime;
    }

    public void setStartTime(Date startTime) {
        StartTime = startTime;
    }

    public Date getEndTime() {
        return EndTime;
    }

    public void setEndTime(Date endTime) {
        this.EndTime = endTime;
    }

    public Boolean getAllDay() {
        return IsAllDay;
    }

    public void setAllDay(Boolean allDay) {
        IsAllDay = allDay;
    }

    public AgentUser getAgentUser() {
        return user;
    }

    public void setAgentUser(AgentUser user) {
        this.user = user;
    }
}
