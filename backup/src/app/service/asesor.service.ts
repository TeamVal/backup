import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Asesor } from '../model/asesor';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class AsesorService {
  private url=`${base_url}/asesores`
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Asesor[]>(this.url);
  }
}
