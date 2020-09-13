import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './screens/dashboard/home-page/home-page.component';
import { ContactUsComponent } from './screens/dashboard/contact-us/contact-us.component';
import { MoviesComponent } from './screens/dashboard/movies/movies.component';
import { SeriesComponent } from './screens/dashboard/series/series.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactUsComponent,
    MoviesComponent,
    SeriesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
