import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateurs } from '../Models/Utilisateurs';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur-add',
  templateUrl: './utilisateur-add.component.html',
  styleUrls: ['./utilisateur-add.component.css']
})
export class UtilisateurAddComponent implements OnInit {
  utilisateur:Utilisateurs=new Utilisateurs;

  constructor(private utilisateurService:UtilisateurService,private router:Router) { }

  ngOnInit(): void {
  }
  onUtilisateur(f:any) {
    const utilisateur = {
      firstname:f.value['firstname'],
      lastname:f.value['lastname'],
      phone:f.value['phone'],
      email:f.value['email']
    }
  //  console.log(utilisateur);
   this.utilisateurService.saveUtilisateur(utilisateur).subscribe(
     resp=>{
      this.router.navigateByUrl("ListUtilisateur");
     }
   );
  }

}
