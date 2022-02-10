import { Usuario } from "./Usuario";

export class Mascota{
    id:number = 0;
    nombre:string = "";
    raza:string = "";
    sexo:string = "";
    usuario:Usuario = new Usuario;
}