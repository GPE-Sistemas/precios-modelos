import { Poligono } from "../auxiliares";

export interface IProvincia {
  _id: string;
  nombre: string;
  coordenadas: Poligono;
}
