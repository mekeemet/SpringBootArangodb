import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateurs } from '../Models/Utilisateurs';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit {
  utilisateurs:any;
  page = 1;
  pageSize =10;

  constructor(private utilisateurService:UtilisateurService,private router:Router) { }


  ngOnInit(): void {
    this.utilisateurService.getUtilisateurs().subscribe(
      (data: any) => {
          this.utilisateurs=data;
          console.log(this.utilisateurs);
      }
    );
  }


  onEditUtilisateur(id:number){
    this.router.navigate(['EditUtilisateur',id]);
  }


  onDeleteUtilisateur(c:Utilisateurs){
    console.log(c);
    let confirm=window.confirm("Voulez vous supprimer!!!");
    if (confirm==true){
      this.utilisateurService.deleteUtilisateur(c).subscribe(
        (data)=>{
          console.log("id===",c.id);
          this.utilisateurs.splice(
            this.utilisateurs.indexOf(c),1);
        },error => {
          console.log("erreur");
        }
      )
    }

  }





}
