import { IRegion, IZona } from "../cliente";
import { ICliente } from "./cliente.model";
import { IDepartamento, ILocalidad, IProvincia } from "./region";

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

export interface IUsuario {
  _id: string;
  fechaCreacion: string;
  username: string;
  hash?: string;
  idCliente: string;
  activo: boolean;
  permisos: IPermiso;
  datosPersonales?: IDatosPersonales;
  // Virtuals
  cliente?: ICliente;
}
