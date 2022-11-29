import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentFilmComponent } from './components/films/current-film/current-film.component';
import { FilmsComponent } from './components/films/films.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { CurrentPeopleComponent } from './components/people/current-people/current-people.component';
import { PeopleComponent } from './components/people/people.component';
import { CurrentPlanetComponent } from './components/planets/current-planet/current-planet.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { CurrentSpecieComponent } from './components/species/current-specie/current-specie.component';
import { SpeciesComponent } from './components/species/species.component';
import { CurrentStarshipComponent } from './components/starships/current-starship/current-starship.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { CurrentVehicleComponent } from './components/vehicles/current-vehicle/current-vehicle.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

const routes: Routes = [
  {path: '', component: NavigateComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'species', component: SpeciesComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'people/:id', component: CurrentPeopleComponent},
  {path: 'planets/:id', component: CurrentPlanetComponent},
  {path: 'films/:id', component: CurrentFilmComponent},
  {path: 'species/:id', component: CurrentSpecieComponent},
  {path: 'vehicles/:id', component: CurrentVehicleComponent},
  {path: 'starships/:id', component: CurrentStarshipComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
