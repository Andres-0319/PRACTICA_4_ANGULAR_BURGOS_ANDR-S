import { Component } from '@angular/core';
import { GastoService } from '../../services/gasto.service';
import { Gasto } from '../../gasto';

@Component({
  selector: 'app-facturas',
  standalone: false,
  templateUrl: './facturas.html',
  styleUrl: './facturas.css',
  host: { ngSkipHydration: 'true' }
})
export class Facturas {
  ruc: string = '';
  valor: number = 0;
  tipoGasto: string = '';

  constructor(private gastoService: GastoService) {}

  agregar() {
    if (!this.ruc || this.valor <= 0 || !this.tipoGasto) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    const nuevoGasto: Gasto = { 
      id: 0,
      tipo: this.tipoGasto, 
      ruc: this.ruc, 
      valor: Number(this.valor) 
    };

    this.gastoService.agregarGasto(nuevoGasto);
    
    alert('Gasto agregado correctamente');
    
    this.ruc = ''; 
    this.valor = 0; 
    this.tipoGasto = '';
  }
}