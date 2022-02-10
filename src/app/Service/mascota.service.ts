import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mascota } from '../models/Mascota';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/';

  getMascotas () {
    return this.http.get<Mascota[]>(this.Url + "mascotas/")
  }
  
  getMascotasByUsuario (usuario:Usuario) {
    return this.http.get<Mascota[]>(this.Url + "usuarios/" + usuario.id + "mascotas")
  }

  saveMascota (usuario:Usuario, mascota:Mascota) {
    return this.http.post<Mascota>(this.Url + "usuarios/" + usuario.id + "/mascotas" , mascota);
  }

  getMascotaById(id:number) {
    return this.http.get<Mascota>(this.Url + "mascotas/" + id);
  }

  updateMascota(usuario:Usuario, mascota:Mascota) {
    return this.http.put<Mascota>(this.Url + "usuarios/" + usuario.id + "/mascotas/" + mascota.id, mascota);
  }

  DeleteMascota(mascota:Mascota) {
    return this.http.delete<Mascota>(this.Url + "mascotas/" + mascota.id);
  }

}
