
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{Estudiante} from '../model/estudiante';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private url=`${base_url}/estudiantes`

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Estudiante[]>(this.url);
  }
}
