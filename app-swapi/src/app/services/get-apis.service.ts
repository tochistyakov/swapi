import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFilm } from '../types/film.interface';
import { IFilmsList } from '../types/filmsList.interface';
import { IPeople } from '../types/people.interface';
import { IPeopleList } from '../types/peopleList.interface';
import { IPlanet } from '../types/planet.interface';
import { IPlanetsList } from '../types/planetList.interface';
import { ISpecie } from '../types/specie.interface';
import { ISpeciesList } from '../types/speciesList.interface';
import { IStarship } from '../types/starship.interface';
import { IStarshipsList } from '../types/starshipsList.interface';
import { IVehicle } from '../types/vehicle.interface';
import { IVehiclesList } from '../types/vehiclesList.interface';

@Injectable({
  providedIn: 'root'
})
export class GetApisService {

  

  constructor(private http: HttpClient) { }

  getMenuList() {
    return this.http.get<any>('https://swapi.dev/api/');
    // return this.http.get<any>('../../assets/swapi/api.json');
  }

  getPeopleList(url: string = 'https://swapi.dev/api/people/'): Observable<IPeopleList> {
    return this.http.get<IPeopleList>(url);
    // return this.http.get<any>('../../assets/swapi/api/people.json');
  }
  getPlanetsList(url: string = 'https://swapi.dev/api/planets/'): Observable<IPlanetsList> {
    return this.http.get<IPlanetsList>(url);
    // return this.http.get<any>('../../assets/swapi/api/planets.json');
  }
  getFilmsList(url: string = 'https://swapi.dev/api/films/'): Observable<IFilmsList> {
    return this.http.get<IFilmsList>(url);
  }
  getSpeciesList(url: string = 'https://swapi.dev/api/species/'): Observable<ISpeciesList> {
    return this.http.get<ISpeciesList>(url);
  }
  getVehiclesList(url: string = 'https://swapi.dev/api/vehicles/'): Observable<IVehiclesList> {
    return this.http.get<IVehiclesList>(url);
  }
  getStarshipsList(url: string = 'https://swapi.dev/api/starships/'): Observable<IStarshipsList> {
    return this.http.get<IStarshipsList>(url);
  }
  getPeople(id: number): Observable<IPeople> {
    return this.http.get<IPeople>(`https://swapi.dev/api/people/${id}/`);
    // return this.http.get<any>(`../../assets/swapi/api/people/${id}.json`);
  }
  getPlanet(id: number): Observable<IPlanet> {
    return this.http.get<IPlanet>(`https://swapi.dev/api/planets/${id}/`);
    // return this.http.get<any>(`../../assets/swapi/api/planet/${id}.json`);
  }
  getFilm(id: number): Observable<IFilm> {
    return this.http.get<IFilm>(`https://swapi.dev/api/films/${id}/`);
  }
  getSpecie(id: number): Observable<ISpecie> {
    return this.http.get<ISpecie>(`https://swapi.dev/api/species/${id}/`);
  }
  getVehicle(id: number): Observable<IVehicle> {
    return this.http.get<IVehicle>(`https://swapi.dev/api/vehicles/${id}/`);
  }
  getStarship(id: number): Observable<IStarship> {
    return this.http.get<IStarship>(`https://swapi.dev/api/starships/${id}/`);
  }
  getItem(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

}
