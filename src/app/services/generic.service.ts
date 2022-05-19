import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { isUndefined, isNullOrUndefined } from 'is-what';

import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000
});


@Injectable({
  providedIn: 'root'
})
export abstract class GenericService<T> {
  public api = environment.API_URL;
  private httpClientHeaders = new HttpHeaders({ 'Context-Type': 'application/json' });

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
  findAllPageable(page: number): Observable<any> {
    const path = `${this.api}${this.endPoint}` + 'page/' + page;
    return this.http.get(path)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  save(request: T): Observable<any> {
    if (request) {
      const path = `${this.api}${this.endPoint}`;
      return this.http.post<any>(path, request, { headers: this.httpClientHeaders })
        .pipe(
          catchError(e => {
            Toast.fire({
              icon: 'error',
              title: e.error.mensaje
            });
            return throwError(() => e);
          })
        );
    }
    throw new Error(`Id NotFound`)
  }

  update(id: number, request: T): Observable<any> {
    const path = `${this.api}${id}`;
    return this.http.put<any>(path, request, { headers: this.httpClientHeaders })
      .pipe(
        catchError(e => {
          Toast.fire({
            icon: 'error',
            title: e.error.mensaje
          });
          return throwError(() => e);
        })
      );
  }

  delete(id: number): Observable<any> {
    const path = `${this.api}${this.endPoint}${id}`;
    return this.http.delete<any>(path, { headers: this.httpClientHeaders }).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Toast.fire({
          icon: 'error',
          title: e.error.mensaje
        });
        return throwError(() => e);
      })
    );
  }

  findById(id: number): Observable<any> {
    if ((!isNaN(id) || !isNullOrUndefined(id)) && id >= 0) {
      const path = `${this.api}${this.endPoint}`;
      return this.http.get<any>(path, { headers: this.httpClientHeaders }).pipe(
        catchError(e => {
          // this.router.navigate(['/servicios']);
          Toast.fire({
            icon: 'error',
            title: e.error.mensaje
          });
          return throwError(() => e);
        })
      );
    }
    throw new Error(`Id NotFound`)
  }  
  
}
