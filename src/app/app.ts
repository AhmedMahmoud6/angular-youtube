import { Component, OnInit, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {YoutubeService} from './core/services/youtube.service';
import { toSignal } from '@angular/core/rxjs-interop';
import {Video} from './core/models/video';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('youtube');






}
