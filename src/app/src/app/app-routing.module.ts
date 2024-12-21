import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Enlever le point avant src

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut
  { path: '**', redirectTo: '' } // Route wildcard pour gérer les URLs non trouvées
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
