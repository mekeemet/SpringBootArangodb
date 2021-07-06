import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurAddComponent } from './utilisateur-add/utilisateur-add.component';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { UtilisateurUpdateComponent } from './utilisateur-update/utilisateur-update.component';

const routes: Routes = [
  { path: '' , component : UtilisateurListComponent},
  { path: 'ListUtilisateur' , component : UtilisateurListComponent},
  { path: 'EditUtilisateur/:id' , component : UtilisateurUpdateComponent},
  { path: 'AddUtilisateur' , component : UtilisateurAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
