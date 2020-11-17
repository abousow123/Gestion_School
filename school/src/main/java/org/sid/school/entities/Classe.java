package org.sid.school.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.UUID;

@Entity
@Table
public class Classe implements Serializable {

    @Id
    @Column(name = "id", unique = true, nullable = false, length = 254)
    private String id = UUID.randomUUID().toString();;

    private String code;
    private String libelle;
    private String libelle_specialite;
    private int nbre_max_etudiant;
    private Date date_created;

    //Relation
    @ManyToOne
    private Tuition tuition;
    @ManyToOne
    private Programme programme;
    @ManyToOne
    @JoinColumn(nullable = true)
    private Cours cour;
    @OneToMany(mappedBy = "classe")
    private Collection<Etudiant> etudiants;

    public Classe() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public String getLibelle_specialite() {
        return libelle_specialite;
    }

    public void setLibelle_specialite(String libelle_specialite) {
        this.libelle_specialite = libelle_specialite;
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

    public Tuition getTuition() {
        return tuition;
    }

    public void setTuition(Tuition tuition) {
        this.tuition = tuition;
    }

    public Programme getProgramme() {
        return programme;
    }

    public void setProgramme(Programme programme) {
        this.programme = programme;
    }

    public Cours getCour() {
        return cour;
    }

    public void setCour(Cours cour) {
        this.cour = cour;
    }

    public Collection<Etudiant> getEtudiants() {
        return etudiants;
    }

    public void setEtudiants(Collection<Etudiant> etudiants) {
        this.etudiants = etudiants;
    }
}
