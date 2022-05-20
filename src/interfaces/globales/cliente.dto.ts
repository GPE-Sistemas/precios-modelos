import { IImagenesCliente, TipoCliente } from "./cliente.model";

export interface ICreateCliente {
  nombre: string;
  tipo: TipoCliente;
  imagenes?: IImagenesCliente;
  idEmpresa?: string;
  comparteRelevamientos?: boolean;
}

export interface IUpdateCliente {
  activo?: boolean;
  nombre?: string;
  tipo?: TipoCliente;
  imagenes?: IImagenesCliente;
  idEmpresa?: string;
  comparteRelevamientos?: boolean;
}
