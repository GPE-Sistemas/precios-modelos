import { Poligono } from "../auxiliares";
import { ICliente } from "../globales";

export interface IRegion {
  _id: string;
  idCliente: string;
  nombre: string;
  coordenadas: Poligono;
  // Virtuals
  cliente?: ICliente;
}
