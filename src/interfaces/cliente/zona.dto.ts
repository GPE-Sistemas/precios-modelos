export interface ICreateZona {
  idCliente?: string;
  nombre: string;
  idsProvincias: string[];
  idsDepartamentos: string[];
  idsLocalidades: string[];
}

export interface IUpdateZona {
  nombre?: string;
  idsProvincias?: string[];
  idsDepartamentos?: string[];
  idsLocalidades?: string[];
}
