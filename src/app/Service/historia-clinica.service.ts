import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistoriaClinica } from '../models/HistoriaClinica';
import { Mascota } from '../models/Mascota';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/';

  getHistoriaClinicas () {
    return this.http.get<HistoriaClinica[]>(this.Url + "hcs/")
  }
  
  getHistoriaClinicasByMascota (mascota:Mascota) {
    return this.http.get<HistoriaClinica[]>(this.Url + "mascotas/" + mascota.id + "/hc")
  }

  saveHistoriaClinica (mascota:Mascota, hc:HistoriaClinica) {
    return this.http.post<HistoriaClinica>(this.Url + "mascotas/" + mascota.id + "/hc/" , hc);
  }

  getHistoriaClinicaById(id:number) {
    return this.http.get<HistoriaClinica>(this.Url + "hcs/" + id);
  }

  updateHistoriaClinica(mascota:Mascota, hc:HistoriaClinica) {
    return this.http.put<HistoriaClinica>(this.Url + "mascotas/" + mascota.id + "/hc/" + hc.id, hc);
  }

  DeleteHistoriaClinica(hc:HistoriaClinica) {
    return this.http.delete<HistoriaClinica>(this.Url + "hcs/" + hc.id);
  }
}
