import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
    path: 'dashboard',
    component:DashboardComponent,
    children:[
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
        }
    ]
    },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
