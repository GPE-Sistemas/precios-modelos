interface IMoneda {
  $?: number;
  U$S?: number;
}

export interface IConfigCliente {
  comparteRelevamientos?: boolean;
  condicionComercial?: string;
  tasas?: {
    Contado?: IMoneda;
    Tarjeta?: IMoneda;
    Pesificado?: IMoneda;
    Canje?: IMoneda;
    Cheque?: IMoneda;
    "Dolar Abierto"?: IMoneda;
    Otro?: IMoneda;
  };
  [key: string]: any;
}
