import { Poligono } from "../../auxiliares";
import { IDepartamento } from "./departamento.model";
import { IProvincia } from "./provincia.model";

export interface ILocalidad {
  _id: string;
  nombre: string;
  coordenadas: Poligono;
  idProvincia: string;
  idDepartamento: string;
  // Virtuals
  provincia?: IProvincia;
  departamento?: IDepartamento;
}
