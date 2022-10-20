import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brewery } from '../interfaces/brewery.interface';

@Injectable({
  providedIn: 'root'
})
export class BrewerysService {

  url: string = 'https://api.openbrewerydb.org/breweries'

  constructor( private http:HttpClient ) { }

  getRandomSizeBrewerys(size:number){
    let urlRandom = `${this.url}/random?size=${size}`
    return this.http.get<Brewery[]>(urlRandom)
  }

  getByCityBrewerys(city: string){
    let urlCity= `${this.url}?by_city=${city}`
    return this.http.get<Brewery[]>(urlCity)
  }

  
}
