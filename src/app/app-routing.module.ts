import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/Usuario/add/add.component';
import { ListarComponent } from './components/Usuario/listar/listar.component';
import { AddMascotaComponent } from './components/Mascota/add/addmascota.component';
import { ListarMascotaComponent } from './components/Mascota/listar/listarmascota.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'usuarios/listar', component:ListarComponent},
  {path:'usuarios/add', component:AddComponent},
  {path:'mascotas/listar', component:ListarMascotaComponent},
  {path:'mascotas/add', component:AddMascotaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
