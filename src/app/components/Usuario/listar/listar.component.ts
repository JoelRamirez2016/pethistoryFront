import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from '../../../Service/usuario.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios: Usuario[] = [];
  constructor(private service:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.service.getUsuarios()
    .subscribe(data => {
      this.usuarios = data;
    });
  }
  Nuevo(){
    this.router.navigate(["usuarios/add"])
  }
  editar(usuario:Usuario) {
    localStorage.setItem("id", usuario.id.toString());
    this.router.navigate(["usuarios/add"])
  }

  eliminar(usuario:Usuario) {
    this.service.DeleteUsuario(usuario).subscribe(data =>{
      this.usuarios=this.usuarios.filter(u=>u!==usuario);
      alert("Usuario Eliminado")
    });
  }

}
