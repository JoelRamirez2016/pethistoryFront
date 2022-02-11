import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/models/Colaborador';
import { ColaboradorService } from 'src/app/Service/colaborador.service';

@Component({
  selector: 'app-add-colaborador',
  templateUrl: './add-colaborador.component.html',
  styleUrls: ['./add-colaborador.component.css']
})
export class AddColaboradorComponent implements OnInit {

  colaborador:Colaborador = new Colaborador;

  constructor(private service:ColaboradorService, private router:Router) {
  }

  editar(){
    let id = localStorage.getItem("id");
    if (id) {
      this.service.getColaboradorById(+id).subscribe(data => {
        this.colaborador = data;
      });
      localStorage.removeItem("id");
    }
  }

  guardar(){
    if (this.colaborador.id) 
      return this.service.updateColaborador(this.colaborador).subscribe(data=>{
        alert("Colaborador Actualizado exitosamente");
        this.router.navigate(["colaboradores/listar"]);
      });  
    
    return this.service.saveColaborador(this.colaborador).subscribe(data=>{
      alert("Colaborador creado exitosamente");
      this.router.navigate(["colaboradores/listar"]);
    });
  }

  ngOnInit() {
    this.editar()
  }


}
