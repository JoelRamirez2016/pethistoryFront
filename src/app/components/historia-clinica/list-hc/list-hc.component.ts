import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaClinica } from 'src/app/models/HistoriaClinica';
import { HistoriaClinicaService } from 'src/app/Service/historia-clinica.service';

@Component({
  selector: 'app-list-hc',
  templateUrl: './list-hc.component.html',
  styleUrls: ['./list-hc.component.css']
})
export class ListHcComponent implements OnInit {

  hcs:HistoriaClinica[] = [];

  constructor(private service:HistoriaClinicaService, private router:Router) { }

  ngOnInit(): void {
    this.service.getHistoriaClinicas()
    .subscribe(data => {
      this.hcs = data;
    });
  }
  Nuevo(){
    this.router.navigate(["hcs/add"])
  }

  detalles(hc:HistoriaClinica){
    localStorage.setItem("current-hc", JSON.stringify(hc));
    this.router.navigate(["detalles-hc/listar"])
  }

  editar(hc:HistoriaClinica) {
    localStorage.setItem("id", hc.id.toString());
    this.router.navigate(["hcs/add"])
  }

  eliminar(hc:HistoriaClinica) {
    this.service.DeleteHistoriaClinica(hc).subscribe(data =>{
      this.hcs=this.hcs.filter(h=>h!==hc);
      alert("Historia Clinica Eliminada")
    });
  }


}
