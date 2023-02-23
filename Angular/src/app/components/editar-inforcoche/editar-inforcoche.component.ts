import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InforCoche } from 'src/app/models/inforcoche';
import { InforCocheService } from 'src/app/services/inforcoche.service';

@Component({
  selector: 'app-editar-inforcoche',
  templateUrl: './editar-inforcoche.component.html',
  styleUrls: ['./editar-inforcoche.component.css'],
})
export class EditarInforcocheComponent implements OnInit {
 
  id: any;
  inforcocheForm: FormGroup;


  constructor(
    private router: Router,
    private inforcocheService: InforCocheService,
    private rutaActiva: ActivatedRoute,
    public formBuilder: FormBuilder
  ) {
    this.id = this.rutaActiva.snapshot.paramMap.get('id');
    this.inforcocheService.obtenerPorId(this.id).subscribe((res) => {
      this.inforcocheForm.setValue({
        idunico: res['idunico'],
        nombre: res['nombre'],
        marca: res['marca'],
        anyomatriculacion: res['anyomatriculacion'],
        etiquetaambiental: res['etiquetaambiental'],
        imagen: res['imagen'],
        peso: res['peso'],
      });
    });
    this.inforcocheForm = this.formBuilder.group({
      idunico: [''],
      nombre: [''],
      marca: [''],
      anyomatriculacion: [''],
      etiquetaambiental: [''],
      imagen: [''],
      peso: [],
    });
  }

  ngOnInit(): void {}

  editarCoche(): void {

    console.log(this.id);
    console.log(this.inforcocheForm.value);
    this.inforcocheService.actualizar(this.id, this.inforcocheForm.value)
      .subscribe({
        
        next: (res) => {
          console.log(res);
        
          this.router.navigate(['/listar-inforcoche']);
        },
        error: (e: Error) => {
          window.alert('Ha habido algun error en los parámetros que has introducido :(');
        }
      });
  }
}
