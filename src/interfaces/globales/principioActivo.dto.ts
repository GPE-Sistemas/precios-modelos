export interface ICreatePrincipioActivo {
  nombre: string;
  nombreCorto?: string;
  idFamiliaQuimica: string;
}

export interface IUpdatePrincipioActivo {
  nombre?: string;
  nombreCorto?: string;
  idFamiliaQuimica?: string;
}
