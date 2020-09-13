import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './screens/home-page/home-page.component';
import { ContactUsComponent } from './screens/contact-us/contact-us.component';
import { MoviesComponent } from './screens/movies/movies.component';
import { SeriesComponent } from './screens/series/series.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'homepage',
        component: HomePageComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'movies',
        component: MoviesComponent,
      },
      {
        path: 'series',
        component: SeriesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
