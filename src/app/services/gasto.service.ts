import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Gasto } from '../gasto';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private configUrl = '/assets/datos.json';
  private gastosEnMemoria: Gasto[] = [];
  private readonly STORAGE_KEY = 'gastos_data';

  constructor(
    private httpclient: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { 
    this.cargarDesdeStorage();
  }

  private cargarDesdeStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const guardados = localStorage.getItem(this.STORAGE_KEY);
      if (guardados) {
        this.gastosEnMemoria = JSON.parse(guardados);
      }
    }
  }

  obtenerDatos(): Observable<Gasto[]> {
    if (this.gastosEnMemoria.length > 0) {
      return of(this.gastosEnMemoria);
    }
    return this.httpclient.get<Gasto[]>(this.configUrl).pipe(
      tap(data => {
        this.gastosEnMemoria = data;
        this.guardarEnStorage();
      })
    );
  }

  agregarGasto(nuevoGasto: Gasto) {
    const maxId = this.gastosEnMemoria.length > 0 
      ? Math.max(...this.gastosEnMemoria.map(g => Number(g.id))) 
      : 0;
    
    nuevoGasto.id = maxId + 1;
    this.gastosEnMemoria.push(nuevoGasto);
    this.guardarEnStorage();
  }

  private guardarEnStorage() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.gastosEnMemoria));
    }
  }
}