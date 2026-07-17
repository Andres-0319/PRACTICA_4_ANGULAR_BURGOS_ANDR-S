import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Informacion } from './components/informacion/informacion';
import { Facturas } from './components/facturas/facturas';
import { Reporte } from './components/reporte/reporte';
import { Menu } from './components/menu/menu';
import { GastoService } from './services/gasto.service';
import { UserService } from './services/user.service';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [App, Informacion, Facturas, Reporte, Menu, ListaUsuariosComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(),
    GastoService,
    UserService,
    provideHttpClient(withFetch()),
  ],
  bootstrap: [App],
})
export class AppModule {}