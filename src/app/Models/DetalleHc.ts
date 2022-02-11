import { HistoriaClinica } from "./HistoriaClinica";
import { Colaborador } from "./Colaborador";

export class DetalleHc {
    id:number = 0;
    temperatura:string = "";
    peso:string = "";
    frecuencia_cardiaca:string = "";
    frecuencia_respiratoria:string = "";
    fecha_hora:string = "";
    alimentacion:string = "";
    habitad:string = "";
    observacion:string = "";
    colaborador:Colaborador = new Colaborador;
    historia_clinica:HistoriaClinica = new HistoriaClinica;
}