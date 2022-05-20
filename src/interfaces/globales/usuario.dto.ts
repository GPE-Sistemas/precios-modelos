import { IDatosPersonales, IPermiso } from "./usuario.model";

export interface ICreateUsuario {
  idCliente?: string;
  username: string;
  password?: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
  permisos: IPermiso[];
}

export interface IUpdateUsuario {
  idCliente?: string;
  username?: string;
  password?: string;
  hash?: string;
  activo?: boolean;
  datosPersonales?: IDatosPersonales;
  permisos?: IPermiso[];
}
