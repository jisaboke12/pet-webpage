import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {PetParadigmComponent} from './pet-paradigm/pet-paradigm.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavbarComponent, RouterOutlet, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-frontend';
}
