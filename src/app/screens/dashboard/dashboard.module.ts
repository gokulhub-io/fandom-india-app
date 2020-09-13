import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ContactUsComponent,
    MoviesComponent,
    SeriesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})

export class DashboardModule { }
