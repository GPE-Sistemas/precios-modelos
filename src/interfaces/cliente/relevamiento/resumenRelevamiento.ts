import { IEmpresa, IProducto } from "../../globales";

export interface IResumenRelevamiento {
  producto: IProducto;
  empresa: IEmpresa;
  RelevamientosPorFecha: {
    fecha: string;
    precios: number[];
  }[];
}
