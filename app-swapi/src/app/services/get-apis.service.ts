import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetApisService {

  

  constructor(private http: HttpClient) { }

  getMenuList() {
    return this.http.get<any>('https://swapi.dev/api/');
  }
}
