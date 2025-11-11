import { Component, OnInit, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {YoutubeService} from './core/services/youtube.service';
import { toSignal } from '@angular/core/rxjs-interop';
import {Video} from './core/models/video';
import {Navbar} from './shared/components/navbar/navbar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('youtube');






}
