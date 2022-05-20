import { Poligono } from "../../auxiliares";

export interface ICreateLocalidad {
  nombre: string;
  coordenadas?: Poligono;
  idProvincia: string;
  idDepartamento: string;
}

export interface IUpdateLocalidad {
  nombre?: string;
  coordenadas?: Poligono;
  idProvincia?: string;
  idDepartamento?: string;
}
