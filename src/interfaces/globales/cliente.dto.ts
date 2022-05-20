export interface IImagenesCliente {
  icono?: string;
  logo?: string;
  [key: string]: string | undefined;
}

export type TipoCliente = "Admin" | "Relevador" | "Relevador Full" | "Lector";

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
