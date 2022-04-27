import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Localidad } from '../components/model/localidad';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  private apiUrl: 'http://localhost:8080/api/v1/localidades/'

  constructor(
    private http:HttpClient
  ) { }

  findAll(): Observable<Localidad[]>{
    const path = `http://localhost:8080/api/v1/localidades/`;
    return this.http.get(path).pipe(
      map((response:any)=> response.data as Localidad[])
    );
  }

}
