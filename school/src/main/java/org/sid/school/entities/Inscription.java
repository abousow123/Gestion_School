package org.sid.school.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
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
    private Classe classe;
    private Tuition tuition;
    private Programme programme;
    private Etudiant etudiant;
    private ModePaiement paiement ;

    private User user;
}
