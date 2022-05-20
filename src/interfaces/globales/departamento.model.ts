import { Poligono } from "../auxiliares";
import { IProvincia } from "./provincia.model";

export interface IDepartamento {
  _id: string;
  nombre: string;
  coordenadas: Poligono;
  idProvincia: string;
  // Virtuals
  provincia?: IProvincia;
}
