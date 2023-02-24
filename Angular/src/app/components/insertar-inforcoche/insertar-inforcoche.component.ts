import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InforCocheService } from 'src/app/services/inforcoche.service';

@Component({
  selector: 'app-inforcoche',
  templateUrl: './insertar-inforcoche.component.html',
  styleUrls: ['./insertar-inforcoche.component.css'],
})
export class InsertarInforcocheComponent implements OnInit {
  inforcocheForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private inforcocheService: InforCocheService
  ) {
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

  insertarCoche(): any {
    this.inforcocheService.instertar(this.inforcocheForm.value).subscribe({
      next: async (res) => {
        await console.log(res);
        this.router.navigate(['/listar-inforcoche']);
      },
      error : (e: Error) =>{
        console.log(e);
      }
    });
  }
}
