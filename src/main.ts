import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {Routes} from '@angular/router';
import {PetParadigmComponent} from './app/pet-paradigm/pet-paradigm.component';
import {ConsultationFormComponent} from './app/consultation-form/consultation-form.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

export const routes: Routes = [
];
