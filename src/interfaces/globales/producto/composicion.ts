import { IFamiliaQuimica } from "../familiaQuimica.model";
import { IPrincipioActivo } from "../principioActivo.model";

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
