import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {PetParadigmComponent} from './pet-paradigm/pet-paradigm.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, PetParadigmComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-frontend';
}
