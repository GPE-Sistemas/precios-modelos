import { Poligono } from "../auxiliares";

export interface ICreateRegion {
  idCliente: string;
  nombre: string;
  coordenadas?: Poligono;
}

export interface IUpdateRegion {
  nombre?: string;
  coordenadas?: Poligono;
}
