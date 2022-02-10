import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/models/Mascota';
import { MascotaService } from 'src/app/Service/mascota.service';

@Component({
  selector: 'app-listarmascota',
  templateUrl: './listarmascota.component.html',
  styleUrls: ['./listarmascota.component.css']
})
export class ListarMascotaComponent implements OnInit {

  mascotas:Mascota[] = [];

  constructor(private service:MascotaService, private router:Router) { }

  ngOnInit(): void {
    this.service.getMascotas()
    .subscribe(data => {
      this.mascotas = data;
    });
  }
  Nuevo(){
    this.router.navigate(["mascotas/add"])
  }
  editar(mascota:Mascota) {
    localStorage.setItem("id", mascota.id.toString());
    this.router.navigate(["mascotas/add"])
  }

  eliminar(mascota:Mascota) {
    this.service.DeleteMascota(mascota).subscribe(data =>{
      this.mascotas=this.mascotas.filter(m=>m!==mascota);
      alert("Mascota Eliminada")
    });
  }

}
