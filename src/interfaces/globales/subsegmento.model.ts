import { ISegmento } from "./segmento.model";

export interface ISubsegmento {
  _id: string;
  nombre: string;
  idSegmento: string;
  // Virtuals
  segmento?: ISegmento;
}
