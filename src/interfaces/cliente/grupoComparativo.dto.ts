export interface ICreateGrupoComparativo {
  idCliente?: string;
  nombre: string;
  idsProductos?: string[];
}

export interface IUpdateGrupoComparativo {
  nombre?: string;
  idsProductos?: string[];
}
