package org.sid.school.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.UUID;

@Entity
@Table
public class Classe implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;

    private String code;
    private String libelle;
    private int nbre_max_etudiant;
    private Date date_created;

    //Relation
    @OneToMany(mappedBy = "classe")
    @JsonIgnore
    private Collection<Inscription> inscriptions;
    @OneToMany
    private Collection<Cours> cours;
    @ManyToOne
    private AgentUser user ;


    public Classe() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public int getNbre_max_etudiant() {
        return nbre_max_etudiant;
    }

    public void setNbre_max_etudiant(int nbre_max_etudiant) {
        this.nbre_max_etudiant = nbre_max_etudiant;
    }

    public Date getDate_created() {
        return date_created;
    }

    public void setDate_created(Date date_created) {
        this.date_created = date_created;
    }
}
