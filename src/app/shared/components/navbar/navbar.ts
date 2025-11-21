import {Component, ElementRef, HostListener, inject, OnInit, signal, ViewChild, WritableSignal} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faMagnifyingGlass, faMicrophone, faAdd, faBell } from '@fortawesome/free-solid-svg-icons';
import {RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {debounceTime, distinctUntilChanged, filter, of, Subject, switchMap, take} from 'rxjs';
import {YoutubeService} from '../../../core/services/youtube.service';
import {SuggestedVideo} from '../../../core/models/video';
import {catchError} from 'rxjs/operators';
import {decodeHtml} from '../../../core/utils/formatters'; //

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, RouterLink, NgIf, NgForOf],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  standalone: true,
})
export class Navbar implements OnInit{
  faBars = faBars;
  faMagnifyingGlass = faMagnifyingGlass;
  faMicrophone = faMicrophone;
  faAdd = faAdd;
  faBell = faBell;

  protected isToggled: WritableSignal<boolean> = signal(false);
  query: WritableSignal<string> = signal('');
  q$ = new Subject<string>();
  isQuerying: WritableSignal<boolean> = signal<boolean>(false);
  queryResults: WritableSignal<SuggestedVideo[]> = signal<SuggestedVideo[]>([])
  private youtube: YoutubeService = inject(YoutubeService);

  @ViewChild('searchInput') searchInput!: ElementRef;

  ngOnInit() {
    this.q$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(q => q.trim().length > 0),
      switchMap(q => this.youtube.getSearchResults(q).pipe(
        catchError(err => {
          console.error('search error', err);
          return of({items: []})
          }
        )
      )
      ),
    ).subscribe(
      {
        next: res => {
          this.queryResults.set(res.items);
        },
        error: err => {
          console.error('unexpected error', err)
        }
      }
    );
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.searchInput.nativeElement.contains(event.target as Node);
    if (!clickedInside) {
      this.isToggled.set(false);
    }
  }

  onInputClick () {
    if (this.query().length > 0) this.isToggled.set(true);
  }

  onKeyDown(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.query.set(value);
    if (value.trim() === "") {
      this.isToggled.set(false)
      return;
    }

    this.q$.next(value);

    // reopen the list when typing
    if (!this.isToggled()) this.isToggled.set(true);

    //
    // console.log('User typed:', value);
    // console.log('query value:', this.query());

  }

  protected readonly decodeHtml = decodeHtml;
}
