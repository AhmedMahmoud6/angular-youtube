import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faThumbsUp, faHeart, faBars, faMagnifyingGlass, faMicrophone, faAdd, faBell } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {RouterLink} from '@angular/router'; //

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  standalone: true,
})
export class Navbar {
  faBars = faBars;
  faMagnifyingGlass = faMagnifyingGlass;
  faMicrophone = faMicrophone;
  faAdd = faAdd;
  faBell = faBell;
}
