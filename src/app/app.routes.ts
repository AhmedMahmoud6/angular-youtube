import {provideRouter, Routes, withInMemoryScrolling} from '@angular/router';
import {ApplicationConfig} from '@angular/core';


export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./features/home/home.routs").then(m => m.HOME_ROUTES)

  },
  {
    path: "video/:id",
    loadChildren: () => import("./features/video-details/video-details.route").then(m => m.VIDEO_DETAILS_ROUTES),
  },
  {
    path: "search",
    loadComponent: () => import("./features/search/search").then(m => m.Search),
  }
];
