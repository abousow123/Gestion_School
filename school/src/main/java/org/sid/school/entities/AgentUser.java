package org.sid.school.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;

@Entity
public class AgentUser implements Serializable {

    @Id
    @Column(name = "id", unique = true, nullable = false, length = 254)
    private String id = UUID.randomUUID().toString();

    private String firstName;
    private String lastName;
    private String tel;
    private String login;
    private String password;
    private String photo;
    private String username;
    private boolean userActive ;

    //Relation
    @ManyToMany(fetch = FetchType.EAGER)
    Collection<Role> roles = new ArrayList<>();

    public AgentUser() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> role) {
        this.roles = role;
    }

    public boolean isUserActive() {
        return userActive;
    }

    public void setUserActive(boolean userActive) {
        this.userActive = userActive;
    }
}
