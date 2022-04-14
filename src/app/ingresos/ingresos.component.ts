import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingreso :Ingreso = {
    id: 1,
    fecha: '14/04/22, 17:50:32',
    rut: 260505556,
    name: 'carlos sanchez',
    boleta: 25873,
    producto: 1265,
    desc: 'problemas con la carga',
    resumen: 'se procedió a testear y se encontró una celda dañana. Se procedió a cambiar',
    estado: 'resuelto',
    tlf: 995982424
  }
  constructor() { }

  ngOnInit(): void {
  }

}
