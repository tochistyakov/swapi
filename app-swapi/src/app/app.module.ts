import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { FilmsComponent } from './components/films/films.component';
import { SpeciesComponent } from './components/species/species.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { CurrentPeopleComponent } from './components/people/current-people/current-people.component';
import { CurrentPlanetComponent } from './components/planets/current-planet/current-planet.component';
import { CurrentFilmComponent } from './components/films/current-film/current-film.component';
import { CurrentSpecieComponent } from './components/species/current-specie/current-specie.component';
import { CurrentVehicleComponent } from './components/vehicles/current-vehicle/current-vehicle.component';
import { CurrentStarshipComponent } from './components/starships/current-starship/current-starship.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NameFromApiPipe } from './pipes/name-from-api.pipe';
import { FourZeroFourComponent } from './components/four-zero-four/four-zero-four.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    FooterComponent,
    HeaderComponent,
    PeopleComponent,
    PlanetsComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent,
    CurrentPeopleComponent,
    CurrentPlanetComponent,
    CurrentFilmComponent,
    CurrentSpecieComponent,
    CurrentVehicleComponent,
    CurrentStarshipComponent,
    LoaderComponent,
    NameFromApiPipe,
    FourZeroFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
