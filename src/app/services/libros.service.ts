import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../components/model/libro';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class LibrosService extends GenericService<Libro> {

  constructor(
    private httpClient:HttpClient
  ) {
    super(httpClient,'libros/')
   }
}
