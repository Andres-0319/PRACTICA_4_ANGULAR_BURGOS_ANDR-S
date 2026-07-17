import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GastoService } from '../../services/gasto.service';
import { Gasto } from '../../gasto';

@Component({
  selector: 'app-reporte',
  standalone: false,
  templateUrl: './reporte.html',
  styleUrl: './reporte.css'
})
export class Reporte implements OnInit {
  gastos: Gasto[] = [];

  constructor(
    private gastoService: GastoService, 
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.cargarGastos();
  }

  get totalGastos(): number {
    return this.gastos.reduce((total, g) => total + (Number(g.valor) || 0), 0);
  }

  cargarGastos(): void {
    this.gastoService.obtenerDatos().subscribe({
      next: (data: Gasto[]) => {
        this.gastos = data;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Error al obtener los datos:', err);
      }
    });
  }
}