import {environment} from "../../environments/environment.development";

export class Constant {
  public static API_ENDPOINT = environment.apiUrl;

  public static PRODUCT = {
    GET_ALL: '/api/products'
  };
}
