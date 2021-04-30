package org.sid.school.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.UUID;

@Entity
public class Programme implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;

    private String code_programme;
    private String libelle;
    private String description;
    private double prix;
    private int dropOff;

    private Date date_created;

    //Relation

    @OneToMany(mappedBy = "programme")
    @JsonIgnore
    private Collection<Inscription> inscriptions;
  /*  @ManyToOne
    private AgentUser user ;*/

    public Programme() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode_programme() {
        return code_programme;
    }

    public void setCode_programme(String code_programme) {
        this.code_programme = code_programme;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public String getTypeProgramme() {
        return description;
    }

    public void setTypeProgramme(String description) {
        this.description = description;
    }

    public Date getDate_created() {
        return date_created;
    }

    public void setDate_created(Date date_created) {
        this.date_created = date_created;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    public int getDropOff() {
        return dropOff;
    }

    public void setDropOff(int dropOff) {
        this.dropOff = dropOff;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Collection<Inscription> getInscriptions() {
        return inscriptions;
    }

    public void setInscriptions(Collection<Inscription> inscriptions) {
        this.inscriptions = inscriptions;
    }
}
