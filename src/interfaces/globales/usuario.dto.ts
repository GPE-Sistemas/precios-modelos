import { IRegion, IZona } from "../cliente";
import { IDepartamento } from "./departamento.model";
import { ILocalidad } from "./localidad.model";
import { IProvincia } from "./provincia.model";

export type TipoUsuario = "Admin" | "Relevador" | "Lector";

export interface IPermiso {
  tipo: TipoUsuario;
  global?: boolean;
  idsZona?: string[];
  idsRegion?: string[];
  idsProvincia?: string[];
  idsDepartamento?: string[];
  idsLocalidad?: string[];
  // Populate
  zonas?: IZona[];
  regiones?: IRegion[];
  provincias?: IProvincia[];
  departamentos?: IDepartamento[];
  localidades?: ILocalidad[];
}

export interface IDatosPersonales {
  nombre?: string;
  email?: string;
  [key: string]: string | undefined;
}

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
