import { ICliente, IDepartamento, ILocalidad, IProvincia } from "../globales";

export interface IZona {
  _id: string;
  idCliente: string;
  nombre: string;
  idsProvincias: string[];
  idsDepartamentos: string[];
  idsLocalidades: string[];
  // Virtuals
  cliente?: ICliente;
  provincias?: IProvincia[];
  departamentos?: IDepartamento[];
  localidades?: ILocalidad[];
}
