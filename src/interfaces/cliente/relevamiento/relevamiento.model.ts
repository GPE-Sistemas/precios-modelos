import { ICliente, IUsuario } from "../../globales";
import { IPagoRelevamiento } from "./pagoRelevamiento";
import { IProductoRelevamiento } from "./productoRelevamiento";
import { IUbicacionRelevamiento } from "./ubicacionRelevamiento";

export interface IRelevamiento {
  _id: string;
  idCliente: string;
  fecha: string;
  campAgricola: string;
  idUsuario: string;
  condicionComercial: string;
  fuente: string;
  tipoRelevamiento: string;
  verificado: boolean;
  observaciones: string;
  disponibilidad: string;
  ubicacion: IUbicacionRelevamiento;
  pago: IPagoRelevamiento;
  producto: IProductoRelevamiento;
  // Virtuals
  cliente?: ICliente;
  usuario?: IUsuario;
}
