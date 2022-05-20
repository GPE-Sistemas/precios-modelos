import { IFamiliaQuimica } from "./familiaQuimica.model";

export interface IPrincipioActivo {
  _id: string;
  nombre: string;
  nombreCorto?: string;
  idFamiliaQuimica: string;
  // Virtuals
  familiaQuimica?: IFamiliaQuimica;
}
