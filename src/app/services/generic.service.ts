import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> {
  public api = environment.API_URL;

  constructor(
    private http: HttpClient,
    @Inject(String) private endPoint: string
  ) { }

  findAll(): Observable<T | T[]> {    
    const path = `${this.api}${this.endPoint}`;
    return this.http.get(path)
      .pipe(
        map((response: any) => response.data as T)
      );
  }
}
