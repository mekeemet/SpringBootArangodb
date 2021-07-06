package com.arangodb.spring.demo.entity;

import com.arangodb.springframework.annotation.ArangoId;
import com.arangodb.springframework.annotation.Document;
import com.arangodb.springframework.annotation.PersistentIndex;
import org.springframework.data.annotation.Id;

@Document("Utilisateur")
@PersistentIndex(fields = {"lastname"})
public class Utilisateur {
    @Id
    private String id;
    @ArangoId
    private String arangoId;
    private String firstname;
    private String lastname;
    private String email;
    private String phone;

    public Utilisateur(String id, String arangoId, String firstname, String lastname, String email, String phone) {
        this.id = id;
        this.arangoId = arangoId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getArangoId() {
        return arangoId;
    }

    public void setArangoId(String arangoId) {
        this.arangoId = arangoId;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "Utilisateur{" +
                "id='" + id + '\'' +
                ", arangoId='" + arangoId + '\'' +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}
