import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { InforCoche } from '../models/inforcoche';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InforCocheService {

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http: HttpClient) {
  }

  obtenerTodos(){
    return this.http.get<InforCoche[]>(`http://localhost:3000/obtener/todos`);
    //.pipe(catchError(this.handleError));
  }

  obtenerPorId(idUnico: any): Observable<any>{
    return this.http.get<InforCoche>(`http://localhost:3000/obtener/${idUnico}`);
   /* {headers: this.httpHeaders}).pipe(
      map((res:any) => {
        return res.json() || {};
      }),
      catchError(this.handleError)
    );
 */
  }

  instertar(coche: any): Observable<any>{
    return this.http.post<InforCoche>(`http://localhost:3000/insertar`, coche);
    //.pipe(catchError(this.handleError));
  }

  actualizar(idUnico: any, coche: any): Observable<any>{
    return this.http.put<InforCoche>(`http://localhost:3000/actualizar/${idUnico}`, coche);
   /* {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
    */
  }

  eliminarPorId(idUnico: any): Observable<any>{
    return this.http.delete(`http://localhost:3000/eliminar/${idUnico}`);
    //.pipe(catchError(this.handleError));
  }

  eliminarTodos(){
    return this.http.delete(`http://localhost:3000/eliminar/todo`);
    //.pipe(catchError(this.handleError));
  }

/*   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  } */
}
