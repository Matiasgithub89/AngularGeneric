import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Autor } from '../components/model/autor';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class AutoresService extends GenericService<Autor> {
  private endpoint= this.api + 'autores/';
  
  constructor(
    private httpClient:HttpClient
  ) {
    super(httpClient,'autores/')
   }

  
}
