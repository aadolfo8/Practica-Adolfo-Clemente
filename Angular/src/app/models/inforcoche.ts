export class InforCoche {
    id?: number;
    idunico?: string;
    nombre?: string;
    marca?: string;
    anyomatriculacion?: string;
    etiquetaambiental?: string;
    imagen?: string;
    peso?: number;

   constructor(id: number, idunico: string, nombre: string, marca:string, anyomatriculacion: string, etiquetaambiental: string, imagen: string,peso: number){
    this.id = id;
    this.idunico = idunico;
    this.nombre = nombre;
    this.marca = marca;
    this.anyomatriculacion = anyomatriculacion;
    this.etiquetaambiental = etiquetaambiental;
    this.imagen = imagen;
    this.peso = peso;
   }

}
