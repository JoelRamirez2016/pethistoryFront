import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/Usuario/add/add.component';
import { ListarComponent } from './components/Usuario/listar/listar.component';
import { AddMascotaComponent } from './components/Mascota/add/addmascota.component';
import { ListarMascotaComponent } from './components/Mascota/listar/listarmascota.component';
import { ListColaboradorComponent } from './components/colaborador/list-colaborador/list-colaborador.component'
import { AddColaboradorComponent } from './components/colaborador/add-colaborador/add-colaborador.component'
import { HomeComponent } from './components/home/home.component';
import { AddHcComponent } from './components/historia-clinica/add-hc/add-hc.component';
import { ListHcComponent } from './components/historia-clinica/list-hc/list-hc.component';
import { AddDetallesHcComponent } from './components/detalles-hc/add-detalles-hc/add-detalles-hc.component';
import { ListDetallesHcComponent } from './components/detalles-hc/list-detalles-hc/list-detalles-hc.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'usuarios/listar', component:ListarComponent},
  {path:'usuarios/add', component:AddComponent},
  {path:'colaboradores/listar', component:ListColaboradorComponent},
  {path:'colaboradores/add', component:AddColaboradorComponent},
  {path:'mascotas/listar', component:ListarMascotaComponent},
  {path:'mascotas/add', component:AddMascotaComponent},
  {path:'hcs/listar', component:ListHcComponent},
  {path:'hcs/add', component:AddHcComponent},
  {path:'detalles-hc/listar', component:ListDetallesHcComponent},
  {path:'detalles-hc/add', component:AddDetallesHcComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
