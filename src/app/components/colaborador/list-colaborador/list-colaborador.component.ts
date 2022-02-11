import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/models/Colaborador';
import { ColaboradorService } from 'src/app/Service/colaborador.service';

@Component({
  selector: 'app-list-colaborador',
  templateUrl: './list-colaborador.component.html',
  styleUrls: ['./list-colaborador.component.css']
})
export class ListColaboradorComponent implements OnInit {

  colaboradores: Colaborador[] = [];
  constructor(private service:ColaboradorService, private router:Router) { }

  ngOnInit(): void {
    this.service.getColaboradores()
    .subscribe(data => {
      this.colaboradores = data;
    });
  }
  Nuevo(){
    this.router.navigate(["colaboradores/add"])
  }
  editar(colaborador:Colaborador) {
    localStorage.setItem("id", colaborador.id.toString());
    this.router.navigate(["colaboradores/add"])
  }

  eliminar(colaborador:Colaborador) {
    this.service.DeleteColaborador(colaborador).subscribe(data =>{
      this.colaboradores=this.colaboradores.filter(u=>u!==colaborador);
      alert("Colaborador Eliminado")
    });
  }

}
