import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Lenguaje } from '../model/lenguaje';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class LenguajeService {

  private url=`${base_url}/lenguajes`
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Lenguaje[]>(this.url);
  }
}
