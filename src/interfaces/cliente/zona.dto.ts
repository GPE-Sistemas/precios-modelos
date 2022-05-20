import { Poligono } from "../auxiliares";

export interface ICreateZona {
  idCliente: string;
  nombre: string;
  coordenadas?: Poligono;
  idRegion: string;
}

export interface IUpdateZona {
  nombre?: string;
  coordenadas?: Poligono;
  idRegion?: string;
}
