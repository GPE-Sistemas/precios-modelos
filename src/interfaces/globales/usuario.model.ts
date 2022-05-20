import { ICliente } from "./cliente.model";
import { IDatosPersonales, IPermiso } from "./usuario.dto";

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
