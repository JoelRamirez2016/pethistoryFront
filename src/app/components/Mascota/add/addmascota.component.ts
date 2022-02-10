import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { MascotaService } from 'src/app/Service/mascota.service';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { Mascota } from '../../../models/Mascota';

@Component({
  selector: 'appa-addmascota',
  templateUrl: './addmascota.component.html',
  styleUrls: ['./addmascota.component.css']
})
export class AddMascotaComponent implements OnInit {

  mascota:Mascota = new Mascota;
  usuarios:Usuario[] = [];

  constructor(private uservice:UsuarioService, private mservice:MascotaService, private router:Router) {
  }

  editar(){
    this.uservice.getUsuarios()
    .subscribe(data => {
      this.usuarios = data;
    });

    let id = localStorage.getItem("id");
    if (id) {
      this.mservice.getMascotaById(+id).subscribe(data => {
        this.mascota = data;
      });
      localStorage.removeItem("id");
    }
  }

  guardar(){
    if (this.mascota.id) 
      return this.mservice.updateMascota(this.mascota.usuario, this.mascota)
      .subscribe(data=>{
        alert("Mascota Actualizado exitosamente");
        this.router.navigate(["mascotas/listar"]);
      });  
  
    return this.mservice.saveMascota(this.mascota.usuario, this.mascota)
    .subscribe(data=>{
      alert("Mascota creada exitosamente");
      this.router.navigate(["mascotas/listar"]);
    });
  }

  ngOnInit() {
    this.editar()
  }


}
