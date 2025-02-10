import {Component, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
    imports: [
        RouterLinkActive, RouterLink,
    ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
isSticky: boolean = false;

@HostListener('window:scroll', [])
  onWindowScroll() {
  const consultButton = document.getElementById('consult-button');
  if(consultButton) {
    this.isSticky = window.scrollY > 100;
    if (this.isSticky) {
      consultButton.classList.add('sticky');
    } else {
      consultButton.classList.remove('sticky');
    }
  }
}

}
