package org.sid.school.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.UUID;

@Entity
public class Tuteur implements Serializable {

    @Id
    @Column(name = "id", unique = true, nullable = false, length = 254)
    private String id = UUID.randomUUID().toString();;

    private String nom ;
    private String prenom;
    private String tel;
    private String email;
    private String typeTuteur ;

    public Tuteur() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTypeTuteur() {
        return typeTuteur;
    }

    public void setTypeTuteur(String typeTuteur) {
        this.typeTuteur = typeTuteur;
    }
}
