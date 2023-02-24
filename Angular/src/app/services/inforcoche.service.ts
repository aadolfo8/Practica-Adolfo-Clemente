import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InforCoche } from '../models/inforcoche';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InforCocheService {
  constructor(private http: HttpClient) {}

  getHeader() {
    const httpOptions = {
      headers: new HttpHeaders({ auth: `${sessionStorage.getItem('auth')}` }),
    };
    return httpOptions;
  }

  obtenerTodos(): Observable<any> {
    return this.http.get<InforCoche[]>(
      `http://localhost:3000/obtener/todos`,
      this.getHeader()
    );
  }

  obtenerPorId(idUnico: any): Observable<any> {
    return this.http.get<InforCoche>(
      `http://localhost:3000/obtener/${idUnico}`,
      this.getHeader()
    );
  }

  instertar(coche: any): Observable<any> {
    return this.http.post<InforCoche>(
      `http://localhost:3000/insertar`,
      coche,
      this.getHeader()
    );
  }

  actualizar(idUnico: any, coche: any): Observable<any> {
    return this.http.put<InforCoche>(
      `http://localhost:3000/actualizar/${idUnico}`,
      coche,
      this.getHeader()
    );
  }

  eliminarPorId(idUnico: any): Observable<any> {
    return this.http.delete(
      `http://localhost:3000/eliminar/${idUnico}`,
      this.getHeader()
    );
  }

  eliminarTodos() {
    return this.http.delete(
      `http://localhost:3000/eliminar/todo`,
      this.getHeader()
    );
  }
}
