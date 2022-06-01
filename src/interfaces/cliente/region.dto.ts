import { Poligono } from "../auxiliares";

export interface ICreateRegion {
  idCliente?: string;
  nombre: string;
  idsZonas?: string[];
}

export interface IUpdateRegion {
  nombre?: string;
  coordenadas?: Poligono;
  idsZonas?: string[];
}
