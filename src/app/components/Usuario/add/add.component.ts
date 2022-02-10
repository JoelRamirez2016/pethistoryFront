import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../Service/usuario.service'
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  usuario:Usuario = new Usuario;

  constructor(private service:UsuarioService, private router:Router) {
  }

  editar(){
    let id = localStorage.getItem("id");
    if (id) {
      this.service.getUsuarioById(+id).subscribe(data => {
        this.usuario = data;
      });
      localStorage.removeItem("id");
    }
  }

  guardar(){
    if (this.usuario.id) 
      return this.service.updateUsuario(this.usuario).subscribe(data=>{
        alert("Usuario Actualizado exitosamente");
        this.router.navigate(["usuarios/listar"]);
      });  
    
    return this.service.saveUsuario(this.usuario).subscribe(data=>{
      alert("Usuario creado exitosamente");
      this.router.navigate(["usuarios/listar"]);
    });
  }

  ngOnInit() {
    this.editar()
  }

}
