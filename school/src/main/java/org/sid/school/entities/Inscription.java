package org.sid.school.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Entity
public class Inscription implements Serializable {

    @Id
    @Column(name = "id", unique = true, nullable = false, length = 254)
    private String id = UUID.randomUUID().toString();;

    private Date dateInscrit;

    //relation
    @ManyToOne
    private Classe classe;
    @ManyToOne
    private Programme programme;
    @ManyToOne
    private Etudiant etudiant;
    @ManyToOne
    private ModePaiement paiement ;
    @ManyToOne
    private AgentUser user;


    public Inscription() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getDateInscrit() {
        return dateInscrit;
    }

    public void setDateInscrit(Date dateInscrit) {
        this.dateInscrit = dateInscrit;
    }

    public Classe getClasse() {
        return classe;
    }

    public void setClasse(Classe classe) {
        this.classe = classe;
    }

    public Programme getProgramme() {
        return programme;
    }

    public void setProgramme(Programme programme) {
        this.programme = programme;
    }

    public Etudiant getEtudiant() {
        return etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.etudiant = etudiant;
    }

    public ModePaiement getPaiement() {
        return paiement;
    }

    public void setPaiement(ModePaiement paiement) {
        this.paiement = paiement;
    }

    public AgentUser getUser() {
        return user;
    }

    public void setUser(AgentUser user) {
        this.user = user;
    }
}
