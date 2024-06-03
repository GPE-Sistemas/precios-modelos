import { IImagenesCliente, ITemaCliente, TipoCliente } from './cliente.model';
import { IConfigCliente } from './configCliente';

export interface ICreateCliente {
  nombre: string;
  tipo: TipoCliente;
  imagenes?: IImagenesCliente;
  idsEmpresa?: string[];
  config?: IConfigCliente;
  tema?: ITemaCliente;
}

export interface IUpdateCliente {
  activo?: boolean;
  nombre?: string;
  tipo?: TipoCliente;
  imagenes?: IImagenesCliente;
  idsEmpresa?: string[];
  config?: IConfigCliente;
  tema?: ITemaCliente;
}
