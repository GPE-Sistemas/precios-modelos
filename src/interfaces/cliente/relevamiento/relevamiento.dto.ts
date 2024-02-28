import { IPagoRelevamiento } from './pagoRelevamiento';
import { IProductoRelevamiento } from './productoRelevamiento';
import { IUbicacionRelevamiento } from './ubicacionRelevamiento';

export interface ICreateRelevamiento {
  idCliente?: string;
  idUsuario?: string;
  fecha?: string;
  campAgricola?: string;
  condicionComercial?: string;
  oferente?: string;
  distribuidor?: string;
  tipoRelevamiento?: string;
  verificado?: boolean;
  observaciones?: string;
  disponibilidad?: string;
  ubicacion?: IUbicacionRelevamiento;
  pago?: IPagoRelevamiento;
  producto?: IProductoRelevamiento;
}

export interface IUpdateRelevamiento {
  fecha?: string;
  campAgricola?: string;
  condicionComercial?: string;
  oferente?: string;
  distribuidor?: string;
  tipoRelevamiento?: string;
  verificado?: boolean;
  observaciones?: string;
  disponibilidad?: string;
  ubicacion?: IUbicacionRelevamiento;
  pago?: IPagoRelevamiento;
  producto?: IProductoRelevamiento;
}
