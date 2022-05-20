import { ICliente, IProducto } from "../globales";

export interface IGrupoComparativo {
  _id: string;
  idCliente: string;
  nombre: string;
  idsProductos: string[];
  // Virtuals
  productos?: IProducto[];
  cliente?: ICliente;
}
