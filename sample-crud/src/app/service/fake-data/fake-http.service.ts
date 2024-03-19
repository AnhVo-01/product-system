import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {ProductsTable} from "../../data/products.table";
import {Product} from "../../model/product";
import {CategoryTable} from "../../data/category.table";

@Injectable({
  providedIn: 'root',
})

export class FakeHttpService {
  products: Product[] = [];

  getAllProduct(): Observable<any> {
    this.products = ProductsTable.products;
    return of(this.products.sort((a, b) => b.id - a.id));
  }

  getProductById(id: any): Observable<any> {
    return of(this.products.find(p => p.id === id));
  }

  searchProduct(text: any): Observable<any> {
    if (text) {
      return of(this.products.filter((item: any) => item.name.toLowerCase().includes(text.toLowerCase())));
    } else {
      return of(this.products);
    }
  }

  addProduct(form: any): Observable<any> {
    let product = {
      id: ProductsTable.products.length + 1,
      name: form.name,
      quantity: form.quantity,
      price: form.price,
      category: this.getCategoryById(Number.parseInt(form.category))
    }
    this.products.unshift(product);
    return of(this.products);
  }

  updateProduct(id: any, body: any): Observable<any> {
    let idx = this.products.findIndex(p => p.id === id);
    this.products[idx] = {
      id: id,
      name: body.name,
      quantity: body.quantity,
      price: body.price,
      category: this.getCategoryById(Number.parseInt(body.category))
    };
    return of(this.products);
  }

  deleteProduct(id: any): Observable<any> {
    this.products.splice(this.products.findIndex((p: any) => p.id === id), 1);
    return of(this.products);
  }

  getAllCategory(): Observable<any> {
    return of(CategoryTable.categories);
  }

  getCategoryById(id: any) {
    return CategoryTable.categories.find((c) => c.id === id);
  }
}
