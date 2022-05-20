import { ICoordenadas } from "../../auxiliares";
import { IDepartamento, ILocalidad, IProvincia } from "../../globales";
import { IRegion } from "../region.model";
import { IZona } from "../zona.model";

export interface IUbicacionRelevamiento {
  coordenadas: ICoordenadas;
  idRegion: string;
  idZona: string;
  idProvincia: string;
  idDepartamento: string;
  idLocalidad: string;
  // Virtuals
  region?: IRegion;
  zona?: IZona;
  provincia?: IProvincia;
  departamento?: IDepartamento;
  localidad?: ILocalidad;
}
