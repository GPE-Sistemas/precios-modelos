import { IEmpresa } from "./empresa.model";
import { IFamiliaQuimica } from "./familiaQuimica.model";
import { IPrincipioActivo } from "./principioActivo.model";
import { ISegmento } from "./segmento.model";
import { ISubsegmento } from "./subsegmento.model";

export interface IComposicion {
  idFamiliaQuimica?: string;
  idPrincipioActivo?: string;
  concentracion?: number;
  formulacion?: string;
  claseTox?: string;
  unidad?: string;
  principal?: boolean;
  // Virtuals
  familiaQuimica?: IFamiliaQuimica;
  principioActivo?: IPrincipioActivo;
}

export interface IProducto {
  _id: string;
  nombre: string;
  idEmpresa: string;
  idSegmento: string;
  idsSubsegmentos: string[];
  composicion?: IComposicion[];
  sku?: string;
  numeroRegistro?: string;
  tipo?: string; // producto generico / diferenciado
  unidad?: string; // unidad en que se vende el producto L/Kg/Pack
  formulacion?: string; // formulacion principal
  claseTox?: string; // grado de toxicidad
  dosisMedia?: number; // en unidad por hectarea
  // Virtuals
  empresa?: IEmpresa;
  segmento?: ISegmento;
  subsegmentos?: ISubsegmento[];
}
