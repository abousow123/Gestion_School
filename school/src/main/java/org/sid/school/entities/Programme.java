package org.sid.school.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Entity
public class Programme implements Serializable {

    @Id
    @Column(name = "id", unique = true, nullable = false, length = 254)
    private String id = UUID.randomUUID().toString();;

    private String code_programme;
    private String libelle;
    private String typeProgramme;
    private Date date_created;

    //Relation
    @ManyToOne
    private Tuition tuition;

    public Programme() {
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public Tuition getTuition() {
        return tuition;
    }

    public void setTuition(Tuition tuition) {
        this.tuition = tuition;
    }
}
