import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaClinica } from 'src/app/models/HistoriaClinica';
import { DetallesHcService } from 'src/app/Service/detalles-hc.service';

@Component({
  selector: 'app-add-detalles-hc',
  templateUrl: './add-detalles-hc.component.html',
  styleUrls: ['./add-detalles-hc.component.css']
})
export class AddDetallesHcComponent implements OnInit {

  hc!:HistoriaClinica;
  constructor(private dservice:DetallesHcService, private router:Router) { }

  cargarHc(){
    const s_hc = localStorage.getItem('current-hc');
    console.log(s_hc);
    if (s_hc) {
      this.hc =  JSON.parse(s_hc);
      // this.dservice.getDetallesByHistoriaClinica(+id).subscribe(data => {
      //   this.usuario = data;
      // });
      localStorage.removeItem("current-hc");
    }
  }

  ngOnInit(): void {
    this.cargarHc();
  }

}
