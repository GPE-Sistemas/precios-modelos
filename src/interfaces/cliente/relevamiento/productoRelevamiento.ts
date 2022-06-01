import {
  IComposicion,
  IEmpresa,
  IProducto,
  ISegmento,
  ISubsegmento,
} from "../../globales";
import { ISubsegmentoPropio } from "../subsegmentoPropio.model";

export interface IProductoRelevamiento {
  idProducto: string;
  idEmpresa: string;
  idSegmento: string;
  idsSubsegmentos?: string[];
  idsSubsegmentosPropios?: string[];
  composicion?: IComposicion[];
  numeroRegistro?: string;
  // Virtuals
  producto?: IProducto;
  empresa?: IEmpresa;
  segmento?: ISegmento;
  subsegmentos?: ISubsegmento[];
  subsegmentosPropios?: ISubsegmentoPropio[];
}
