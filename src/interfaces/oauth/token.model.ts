import { IUsuario } from "../globales";
import { IClient } from "./client.model";

export interface IToken {
  accessToken: string;
  accessTokenExpiresAt?: string;
  refreshToken?: string;
  refreshTokenExpiresAt?: string;
  scope?: string | string[];
  client: IClient;
  user: IUsuario;
}
