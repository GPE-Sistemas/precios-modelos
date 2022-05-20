import { IComposicion } from "./producto.model";

export interface ICreateProducto {
  nombre: string;
  idEmpresa?: string;
  idSegmento?: string;
  idsSubsegmentos?: string[];
  composicion?: IComposicion[];
  sku?: string;
  numeroRegistro?: string;
  tipo?: string; // producto generico / diferenciado
  unidad?: string; // unidad en que se vende el producto L/Kg/Pack
  formulacion?: string; // formulacion principal
  claseTox?: string; // grado de toxicidad
  dosisMedia?: number; // en unidad por hectarea
}

export interface IUpdateProducto {
  nombre?: string;
  idEmpresa?: string;
  idSegmento?: string;
  idsSubsegmentos?: string[];
  composicion?: IComposicion[];
  sku?: string;
  numeroRegistro?: string;
  tipo?: string; // producto generico / diferenciado
  unidad?: string; // unidad en que se vende el producto L/Kg/Pack
  formulacion?: string; // formulacion principal
  claseTox?: string; // grado de toxicidad
  dosisMedia?: number; // en unidad por hectarea
}
