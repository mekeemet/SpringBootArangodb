import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateurs } from '../Models/Utilisateurs';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur-update',
  templateUrl: './utilisateur-update.component.html',
  styleUrls: ['./utilisateur-update.component.css']
})
export class UtilisateurUpdateComponent implements OnInit {

  utilisateur:Utilisateurs=new Utilisateurs();
  idUser:number;
  constructor(private utilisateurService:UtilisateurService,public activatedRoute:ActivatedRoute,private router:Router) {
    this.idUser=activatedRoute.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.utilisateurService.getOneUtilisateurs(this.idUser).subscribe(
      (data:any)=>{
        this.utilisateur=data;
      },error => {
        console.log(error);

      }
    )
  }


  updateUtilisateur(){
    console.log("update ",this.utilisateur);
    this.utilisateurService.updateUtilisateur(this.utilisateur).subscribe(
      (data:any)=>{
        alert("Mise a Jour effectuee");
        this.router.navigate(['ListUtilisateur']);
      },error => {
        console.log("erreur de modification");
        alert("Erreur ")
      }
    )
  }

}
