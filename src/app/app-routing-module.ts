import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Reporte } from './components/reporte/reporte';
import { Informacion } from './components/informacion/informacion';
import { Facturas } from './components/facturas/facturas';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'reporte', pathMatch: 'full' },
  { path: 'reporte', component: Reporte },
  { path: 'informacion', component: Informacion },
  { path: 'facturas', component: Facturas },
  { path: 'usuarios', component: ListaUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }