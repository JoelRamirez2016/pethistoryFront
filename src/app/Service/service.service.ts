import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Models/Usuario'
@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/usuarios';

  getUsuarios () {
    return this.http.get<Usuario[]>(this.Url)
  }

  saveUsuario (usuario:Usuario) {
    return this.http.post<Usuario>(this.Url, usuario);
  }

  getUsuarioById(id:number) {
    return this.http.get<Usuario>(this.Url + "/" + id);
  }

  updateUsuario(usuario:Usuario) {
    return this.http.put<Usuario>(this.Url + "/" + usuario.id, usuario);
  }

  DeleteUsuario(usuario:Usuario) {
    return this.http.delete<Usuario>(this.Url + "/" + usuario.id);
  }
}
