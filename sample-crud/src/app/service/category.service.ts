import {Injectable} from "@angular/core";
import {ApiHelper} from "../core/api-helper";
import {FakeHttpService} from "./fake-data/fake-http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private fakeHttpService: FakeHttpService) {
  }

  getAllCategory(): Observable<any> {
    return this.fakeHttpService.getAllCategory();
  }
}
