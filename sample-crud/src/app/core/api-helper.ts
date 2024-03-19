import {Injectable} from "@angular/core";
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constant} from "./constant";

@Injectable({providedIn: 'root'})
export class ApiHelper {

  constructor(private httpClient: HttpClient) {}

  private getUrlEndpoint(url: string) {
    return Constant.API_ENDPOINT + url;
  }

  get(url: string, options?: any): Observable<any> {
    url = this.getUrlEndpoint(url);
    return this.httpClient.get(url, options);
  }

  post(url: string, body: any, options?: any): Observable<any> {
    url = this.getUrlEndpoint(url);
    return this.httpClient.post(url, body, options);
  }

  put(url: string, body: any, options?: any): Observable<any> {
    url = this.getUrlEndpoint(url);
    return this.httpClient.put(url, body, options);
  }

  request(request: any): Observable<HttpEvent<any>> {
    return this.httpClient.request(request);
  }
}
