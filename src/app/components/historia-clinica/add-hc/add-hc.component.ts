import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaClinica } from 'src/app/models/HistoriaClinica';
import { Mascota } from 'src/app/models/Mascota';
import { HistoriaClinicaService } from 'src/app/Service/historia-clinica.service';
import { MascotaService } from 'src/app/Service/mascota.service';

@Component({
  selector: 'app-add-hc',
  templateUrl: './add-hc.component.html',
  styleUrls: ['./add-hc.component.css']
})
export class AddHcComponent implements OnInit {
  
  hcs:HistoriaClinica[] = [];
  hc:HistoriaClinica = new HistoriaClinica;
  mascotas:Mascota[] = [];

  constructor(private mservice:MascotaService, 
    private hcservice:HistoriaClinicaService, private router:Router) {
  }
  
  editar(){
    /**
     * Filtrar mascotas que no tienen historia clinica
     */
    this.hcservice.getHistoriaClinicas()
    .subscribe(data => {
      this.hcs = data;
      this.mservice.getMascotas()
      .subscribe(data => {
        this.mascotas = data.filter(m=>{
          var h = this.hcs.filter(hc=>hc.mascota.id===m.id);
          return h.length == 0;
        });
      });  
    });

    let id = localStorage.getItem("id");
    if (id) {
      this.hcservice.getHistoriaClinicaById(+id).subscribe(data => {
        this.hc = data;
      });
      localStorage.removeItem("id");
    }
  }

  guardar(){
    if (this.hc.id) 
      return this.hcservice.updateHistoriaClinica(this.hc.mascota, this.hc)
      .subscribe(data=>{
        alert("HistoriaClinica Actualizada exitosamente");
        this.router.navigate(["hcs/listar"]);
      });  
  
    return this.hcservice.saveHistoriaClinica(this.hc.mascota, this.hc)
    .subscribe(data=>{
      alert("HistoriaClinica creada exitosamente");
      this.router.navigate(["hcs/listar"]);
    });
  }

  ngOnInit() {
    this.editar()
  }



}
