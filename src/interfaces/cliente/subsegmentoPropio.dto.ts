export interface ICreateSubsegmentoPropio {
  idCliente: string;
  nombre: string;
  idSegmento: string;
  idsProductos?: string[];
}

export interface IUpdateSubsegmentoPropio {
  nombre?: string;
  idSegmento?: string;
  idsProductos?: string[];
}
