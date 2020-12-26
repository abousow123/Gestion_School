package org.sid.school.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Picture implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String photoName;
    private String description;

    @ManyToOne
    private Gallery gallery;

    public Picture() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPhotoName() {
        return photoName;
    }

    public void setPhotoName(String photoName) {
        this.photoName = photoName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Gallery getGallery() {
        return gallery;
    }

    public void setGallery(Gallery gallery) {
        this.gallery = gallery;
    }
}
