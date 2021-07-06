package com.arangodb.spring.demo.web;

import com.arangodb.spring.demo.entity.Utilisateur;
import com.arangodb.spring.demo.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin("*")
public class UtilisateurController {
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @GetMapping("api/utilisateur")
    public Iterable<Utilisateur> getUtilisateur(){
        return  utilisateurRepository.findAll();
    }

    @GetMapping("api/utilisateur/{id}")
    public Utilisateur getOneUtilisateur(@PathVariable String id){
        return utilisateurRepository.findById(id.toString()).get();
    }

    @PostMapping("api/utilisateur")
    public Utilisateur saveUtilisateur(@RequestBody Utilisateur utilisateur){
        return utilisateurRepository.save(utilisateur);
    }

    @PutMapping("api/utilisateur/{id}")
    public Utilisateur updateUtilisateur(@PathVariable String id, @RequestBody Utilisateur utilisateur){
        utilisateur.setId(id);
        return utilisateurRepository.save(utilisateur);
    }

    @DeleteMapping("api/utilisateur/{id}")
    public boolean deleteCharacters(@PathVariable String id){
        utilisateurRepository.deleteById(id.toString());
        return true;
    }
}
