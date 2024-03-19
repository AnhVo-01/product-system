import {ApiHelper} from "../core/api-helper";
import {Observable} from "rxjs";
import {Constant} from "../core/constant";
import {HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {FakeHttpService} from "./fake-data/fake-http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private apiHelper: ApiHelper,
              private fakeHttpService: FakeHttpService) {}

  getAllProduct(): Observable<any> {
    // return this.apiHelper.get(Constant.PRODUCT.GET_ALL, {params: param});
    return this.fakeHttpService.getAllProduct();
  }

  getProductById(id: any): Observable<any> {
    return this.fakeHttpService.getProductById(id);
  }

  searchProduct(keyword: any): Observable<any> {
    return this.fakeHttpService.searchProduct(keyword);
  }

  addProduct(form: any): Observable<any> {
    return this.fakeHttpService.addProduct(form);
  }

  updateProduct(id: any, body: any): Observable<any> {
    return this.fakeHttpService.updateProduct(id, body);
  }

  deleteProduct(id: any): Observable<any> {
    return this.fakeHttpService.deleteProduct(id);
  }
}
