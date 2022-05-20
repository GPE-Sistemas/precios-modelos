import { IImagenesCliente, TipoCliente } from "./cliente.dto";
import { IEmpresa } from "./empresa.model";

export interface ICliente {
  _id: string;
  fechaCreacion: string;
  activo?: boolean;
  nombre?: string;
  tipo?: TipoCliente;
  imagenes?: IImagenesCliente;
  idEmpresa?: string;
  comparteRelevamientos?: boolean;
  // Virtuals
  empresa: IEmpresa;
}
