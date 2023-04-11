import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import { recusosA } from '../model/recursosA';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class RecursoAService {
  private url=`${base_url}/Recursos`

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<recusosA[]>(this.url);
  }
}
