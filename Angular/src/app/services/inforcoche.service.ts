import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InforCoche } from '../models/inforcoche';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ auth: `${localStorage.getItem('auth')}` }),
};

@Injectable({
  providedIn: 'root',
})
export class InforCocheService {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  obtenerTodos() {
    return this.http.get<InforCoche[]>(
      `http://localhost:3000/obtener/todos`,
      httpOptions
    );
  }

  obtenerPorId(idUnico: any): Observable<any> {
    return this.http.get<InforCoche>(
      `http://localhost:3000/obtener/${idUnico}`,
      httpOptions
    );
  }

  instertar(coche: any): Observable<any> {
    return this.http.post<InforCoche>(
      `http://localhost:3000/insertar`,
      coche,
      httpOptions
    );
  }

  actualizar(idUnico: any, coche: any): Observable<any> {
    return this.http.put<InforCoche>(
      `http://localhost:3000/actualizar/${idUnico}`,
      coche,
      httpOptions
    );
  }

  eliminarPorId(idUnico: any): Observable<any> {
    return this.http.delete(
      `http://localhost:3000/eliminar/${idUnico}`,
      httpOptions
    );
  }

  eliminarTodos() {
    return this.http.delete(`http://localhost:3000/eliminar/todo`, httpOptions);
  }
}
