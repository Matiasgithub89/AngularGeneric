import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Localidad } from '../components/model/localidad';
import { map } from 'rxjs/operators';
import { GenericService } from './generic.service';


@Injectable({
  providedIn: 'root'
})
export class LocalidadesService extends GenericService<Localidad> {

  private endpoint= this.api + 'localidades/';

  constructor(
    private httpClient:HttpClient
  ) { 
    super(httpClient, 'localidades/')
  }

}
