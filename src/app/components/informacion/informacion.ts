import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  standalone: false,
  templateUrl: './informacion.html',
  styleUrl: './informacion.css',
})
export class Informacion implements OnInit{
  constructor(){}
  ngOnInit(): void {
  }
  deducibles=['Educacion', 'Salud', 'Vivienda', 'Vestimenta'];
  mensaje(){
    alert('Esta es información adicional');
  }
}
