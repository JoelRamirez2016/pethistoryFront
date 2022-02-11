import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetalleHc } from '../models/DetalleHc';
import { HistoriaClinica } from '../models/HistoriaClinica';

@Injectable({
  providedIn: 'root'
})
export class DetallesHcService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/';

  getDetallesByHistoriaClinica(hc:HistoriaClinica){
    return this.http.get<DetalleHc[]>(this.Url + "hcs/" + hc.id + "/detalles");
    
  }

  saveDetalleHc(hc:HistoriaClinica, detalle:DetalleHc) {
    return this.http.post<DetalleHc[]>(this.Url + "hcs/" + hc.id + "/detalles", detalle);
  }
 
  deleteDetalleHc(detalle:DetalleHc){
    return this.http.delete<DetalleHc[]>(this.Url + "detalles/" + detalle.id);
  }
}
