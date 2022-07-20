import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// Importamos el libreria Service
import { LibreriaService } from 'src/app/services/libreria.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  busquedaForm = new FormGroup({
    termino: new FormControl()
  });

  constructor(
    private libreriaService: LibreriaService
  ) { }

  onSubmit() {
    console.log('vas bien!');
    // Llamar al servicio y enviarle a la función findBooks el término

    // Conseguir el dato de lo que tipeó el usuario
    const { termino } = this.busquedaForm.value;
    
    this.libreriaService.findBooks(termino).subscribe(libros => {
      console.log('Resultados', libros);
    })
    
  }


  ngOnInit(): void {
  }

}
