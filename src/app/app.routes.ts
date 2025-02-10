import {RouterModule, Routes} from '@angular/router';
import {PetParadigmComponent} from './pet-paradigm/pet-paradigm.component';
import {ConsultationFormComponent} from './consultation-form/consultation-form.component';
import {NavbarComponent} from './navbar/navbar.component';
import {importProvidersFrom, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrapApplication} from '@angular/platform-browser';
import {FishComponent} from './fish/fish.component';
import {CatsComponent} from './cats/cats.component';
import {DogsComponent} from './dogs/dogs.component';




export const routes: Routes = [
  {path: 'pet-paradigm', component: PetParadigmComponent},
  {path: 'consultation', component: ConsultationFormComponent},
  {path: 'fish', component: FishComponent},
  {path: 'cats', component: CatsComponent},
  {path: 'dogs', component: DogsComponent},
  {path: '', redirectTo: 'pet-paradigm', pathMatch: 'full'}
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
