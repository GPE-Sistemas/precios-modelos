import { IImagenesCliente, TipoCliente } from './cliente.model';

export interface ICreateCliente {
  nombre: string;
  tipo: TipoCliente;
  imagenes?: IImagenesCliente;
  idsEmpresa?: string[];
  comparteRelevamientos?: boolean;
  condicionComercialDefault?: string;
}

export interface IUpdateCliente {
  activo?: boolean;
  nombre?: string;
  tipo?: TipoCliente;
  imagenes?: IImagenesCliente;
  idsEmpresa?: string[];
  comparteRelevamientos?: boolean;
  condicionComercialDefault?: string;
}
