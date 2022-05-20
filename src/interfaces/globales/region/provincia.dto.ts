import { Poligono } from "../../auxiliares";

export interface ICreateProvincia {
  nombre: string;
  coordenadas?: Poligono;
}

export interface IUpdateProvincia {
  nombre?: string;
  coordenadas?: Poligono;
}
