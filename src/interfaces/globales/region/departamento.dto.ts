import { Poligono } from "../../auxiliares";

export interface ICreateDepartamento {
  nombre: string;
  coordenadas?: Poligono;
  idProvincia: string;
}

export interface IUpdateDepartamento {
  nombre?: string;
  coordenadas?: Poligono;
  idProvincia?: string;
}
