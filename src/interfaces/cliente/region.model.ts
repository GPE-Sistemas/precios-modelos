import { ICliente } from "../globales";
import { IZona } from "./zona.model";

export interface IRegion {
  _id: string;
  idCliente: string;
  nombre: string;
  idsZonas?: string[];
  // Virtuals
  cliente?: ICliente;
  zonas?: IZona[];
}
