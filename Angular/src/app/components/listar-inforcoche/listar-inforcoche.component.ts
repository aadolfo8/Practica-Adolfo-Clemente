import { Component, OnInit } from '@angular/core';
import { InforCoche } from 'src/app/models/inforcoche';
import { InforCocheService } from 'src/app/services/inforcoche.service';

@Component({
  selector: 'app-listar-inforcoche',
  templateUrl: './listar-inforcoche.component.html',
  styleUrls: ['./listar-inforcoche.component.css'],
})
export class ListarInforcocheComponent implements OnInit {
  inforcoches: InforCoche[] = [];
  idBuscado: any = '';

  constructor(private inforCocheService: InforCocheService) {}

  ngOnInit(): void {
    this.inforCocheService.obtenerTodos().subscribe((res) => {
      this.inforcoches = res;
    });
  }

  eliminar(id: any) {
    console.log(id);
    if (window.confirm(`Quieres eliminarlo el coche con id: ${id} ?`)) {
      this.inforCocheService.eliminarPorId(id).subscribe();
    }
    this.inforcoches.splice(0, this.inforcoches.length);
    this.ngOnInit();
  }

  eliminarTodos() {
    if (
      window.confirm('CUIDADO: si aceptas vas a borrar todos los coches!!!!!')
    ) {
      this.inforCocheService.eliminarTodos().subscribe();
    }
  }

  buscarCoche() {
    this.inforcoches.splice(0, this.inforcoches.length);

    this.inforCocheService.obtenerPorId(this.idBuscado).subscribe((res) => {
      console.log(res);

      this.inforcoches.push(res);
    });
  }

  reiniciarBusqueda() {
    this.idBuscado = '';
    this.ngOnInit();
  }
}
