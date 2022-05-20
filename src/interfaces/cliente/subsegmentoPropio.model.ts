import { ICliente, IProducto, ISegmento } from "../globales";

export interface ISubsegmentoPropio {
  _id: string;
  idCliente: string;
  nombre: string;
  idSegmento: string;
  idsProductos: string[];
  // Virtuals
  cliente?: ICliente;
  segmento?: ISegmento;
  productos?: IProducto[];
}
