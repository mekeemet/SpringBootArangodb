package com.arangodb.spring.demo.repository;

import com.arangodb.spring.demo.entity.Utilisateur;
import com.arangodb.springframework.repository.ArangoRepository;

public interface UtilisateurRepository extends ArangoRepository<Utilisateur, String> {
}
