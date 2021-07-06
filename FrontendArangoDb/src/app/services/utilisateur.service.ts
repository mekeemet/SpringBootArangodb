import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Utilisateurs } from '../Models/Utilisateurs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  public host: string= "http://localhost:8080/";
  constructor(private httpClient:HttpClient) { }


  public getUtilisateurs(){
    return this.httpClient.get(this.host+"api/utilisateur");
  }
  public getOneUtilisateurs(id:number){
    return this.httpClient.get(this.host+"api/utilisateur/"+id);
  }

  public saveUtilisateur(util:any){
    return this.httpClient.post(this.host+"api/utilisateur",util);
  }
  public updateUtilisateur(util:Utilisateurs){
    return this.httpClient.put(this.host+"api/utilisateur/"+util.id,util);
  }
  public deleteUtilisateur(util:any){
    return this.httpClient.delete(this.host+"api/utilisateur/"+util.id);
  }
}
