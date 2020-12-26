package org.sid.school.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
public class Gallery implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private String photo ;

    @OneToMany(mappedBy = "gallery")
    private Collection<Picture> pictures;


    public Gallery() {
    }

    public Gallery(int id, String name, String description, String photo) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.photo = photo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Collection<Picture> getPictures() {
        return pictures;
    }

    public void setPictures(Collection<Picture> pictures) {
        this.pictures = pictures;
    }
}
