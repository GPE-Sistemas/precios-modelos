import { IConfigCliente } from './configCliente';
import { IEmpresa } from './empresa.model';

export interface IImagenesCliente {
  icono?: string;
  logo?: string;
  [key: string]: string | undefined;
}

export interface ITemaCliente {
  primaryColor?: string;
  accentColor?: string;
  warnColor?: string;
  typography?: string;
}

export type TipoCliente = 'Admin' | 'Relevador' | 'Relevador Full' | 'Lector';

export interface ICliente {
  _id: string;
  fechaCreacion: string;
  activo?: boolean;
  nombre?: string;
  tipo?: TipoCliente;
  imagenes?: IImagenesCliente;
  idsEmpresa?: string[];
  config?: IConfigCliente;
  tema?: ITemaCliente;
  // Virtuals
  empresas: IEmpresa[];
}
