import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/Usuario/listar/listar.component';
import { AddComponent } from './components/Usuario/add/add.component';
import { AddMascotaComponent } from './components/Mascota/add/addmascota.component';
import { ListarMascotaComponent } from './components/Mascota/listar/listarmascota.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { UsuarioService } from './Service/usuario.service'
import { HttpClientModule } from '@angular/common/http'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { AddHcComponent } from './components/historia-clinica/add-hc/add-hc.component';
import { ListHcComponent } from './components/historia-clinica/list-hc/list-hc.component';
import { AddColaboradorComponent } from './components/colaborador/add-colaborador/add-colaborador.component';
import { ListColaboradorComponent } from './components/colaborador/list-colaborador/list-colaborador.component';
import { ListDetallesHcComponent } from './components/detalles-hc/list-detalles-hc/list-detalles-hc.component';
import { AddDetallesHcComponent } from './components/detalles-hc/add-detalles-hc/add-detalles-hc.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    AddMascotaComponent,
    ListarMascotaComponent,
    SidenavComponent,
    HomeComponent,
    AddHcComponent,
    ListHcComponent,
    AddColaboradorComponent,
    ListColaboradorComponent,
    ListDetallesHcComponent,
    AddDetallesHcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
