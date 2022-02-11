import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colaborador } from '../models/Colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/colaboradores';

  getColaboradores () {
    return this.http.get<Colaborador[]>(this.Url)
  }

  saveColaborador (colaborador:Colaborador) {
    return this.http.post<Colaborador>(this.Url, colaborador);
  }

  getColaboradorById(id:number) {
    return this.http.get<Colaborador>(this.Url + "/" + id);
  }

  updateColaborador(colaborador:Colaborador) {
    return this.http.put<Colaborador>(this.Url + "/" + colaborador.id, colaborador);
  }

  DeleteColaborador(colaborador:Colaborador) {
    return this.http.delete<Colaborador>(this.Url + "/" + colaborador.id);
  }

}
