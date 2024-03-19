import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ApiHelper} from "../core/api-helper";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = "http://localhost:8080/auth";

  constructor(private apiHelper: ApiHelper) { }

  login(user: any): Observable<any> {
    return this.apiHelper.post(`/auth/login`, user);
  }

  register(user: User): Observable<Object> {
    return this.apiHelper.post(`$/register`, user);
  }
}
