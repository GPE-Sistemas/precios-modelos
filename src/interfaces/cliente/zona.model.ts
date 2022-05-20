import { Poligono } from "../auxiliares";
import { ICliente } from "../globales";
import { IRegion } from "./region.model";

export interface IZona {
  _id: string;
  idCliente: string;
  nombre: string;
  coordenadas: Poligono;
  idRegion: string;
  // Virtuals
  cliente?: ICliente;
  region?: IRegion;
}
