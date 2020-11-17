package org.sid.school.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Entity
public class Programme implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;

    private String code_programme;
    private String libelle;
    private String typeProgramme;
    private Date date_created;

    //Relation
    @ManyToOne
    private User user ;

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
        return typeProgramme;
    }

    public void setTypeProgramme(String typeProgramme) {
        this.typeProgramme = typeProgramme;
    }

    public Date getDate_created() {
        return date_created;
    }

    public void setDate_created(Date date_created) {
        this.date_created = date_created;
    }

}
