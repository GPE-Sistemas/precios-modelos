import { IEmpresa } from "./empresa.model";

export interface IImagenesCliente {
  icono?: string;
  logo?: string;
  [key: string]: string | undefined;
}

export type TipoCliente = "Admin" | "Relevador" | "Relevador Full" | "Lector";

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
