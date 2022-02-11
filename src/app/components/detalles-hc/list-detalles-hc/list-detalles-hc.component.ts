import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/models/Colaborador';
import { DetalleHc } from 'src/app/models/DetalleHc';
import { HistoriaClinica } from 'src/app/models/HistoriaClinica';
import { ColaboradorService } from 'src/app/Service/colaborador.service';
import { DetallesHcService } from 'src/app/Service/detalles-hc.service';

@Component({
  selector: 'app-list-detalles-hc',
  templateUrl: './list-detalles-hc.component.html',
  styleUrls: ['./list-detalles-hc.component.css']
})
export class ListDetallesHcComponent implements OnInit {

  hc!:HistoriaClinica;
  detalles:DetalleHc[] = [];
  newdetalle:DetalleHc = new DetalleHc;
  colaboradores:Colaborador[] = []

  constructor(private cservice:ColaboradorService, private dservice:DetallesHcService, private router:Router) { }

  guardar(){
    this.dservice.saveDetalleHc(this.hc, this.newdetalle)
    .subscribe(data=>{
      alert("Detalle añadido");
      this.router.navigate(["hcs/listar"]);  
    });
  }

  eliminar(detalle:DetalleHc) {
    const colab = detalle.colaborador;
    this.dservice.deleteDetalleHc(detalle)
    .subscribe(data =>{
      this.detalles=this.detalles.filter(d=>d!==detalle);
      this.colaboradores.push(colab);
      alert(data)
    });
  }

  cargarHc(){
    const s_hc = localStorage.getItem('current-hc');

    if (s_hc) {
      this.hc =  JSON.parse(s_hc);
      this.dservice.getDetallesByHistoriaClinica(this.hc).subscribe(dataDetalle => {
        this.cservice.getColaboradores()    
        .subscribe(dataColabs => {
          this.detalles = dataDetalle;
          this.colaboradores = dataColabs.filter(c=>{
            const cs = this.detalles.filter(d=>d.colaborador.id===c.id)
            return cs.length == 0;
          });
        });    
      });
      //localStorage.removeItem("current-hc");
    }else{
      this.router.navigate(["hcs/listar"]);
    }
  }

  ngOnInit(): void {
    this.cargarHc();
  }

}
