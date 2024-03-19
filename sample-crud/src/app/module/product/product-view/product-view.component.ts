import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {HttpParams} from "@angular/common/http"
import {MessageService} from "primeng/api";
import {CategoryService} from "../../../service/category.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {data} from "autoprefixer";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit {
  products: any;
  categories: any;

  textSearch = '';
  pageIndex = 0;
  pageSize = 10;
  totalElements = 0;
  visible = false;

  delete = {
    visible: false,
    productId: 0
  }

  productForm: any;
  formHeader = '';
  updateId = 0;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private messageService: MessageService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getAllProduct();
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
    })
    this.productForm = this.formBuilder.group({
      name: [''],
      quantity: 0,
      category: 0,
      price: 0,
      buttonName: 'ADD'
    })
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe(data => {
      this.setProductList(data);
    })
  }

  search() {
    this.pageIndex = 0;
    this.productService.searchProduct(this.textSearch).subscribe(data => {
      this.setProductList(data);
    });
  }

  onSubmit() {

    this.updateId !== 0 ? this.updateProduct() : this.addProduct();
  }

  addProduct() {
    this.productForm.controls.name.setErrors({invalid:true});
    this.productForm.controls.name.setErrors([Validators.required, Validators.maxLength(5)]);
    this.productForm.controls.name.updateValueAndValidity();
    this.productService.addProduct(this.productForm.value).subscribe(data => {
      this.setProductList(data);
      this.visible = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Added a new product',
      });
    })
  }

  updateProduct() {
    this.productService.updateProduct(this.updateId, this.productForm.value).subscribe(data => {
      this.setProductList(data);
      this.visible = false;
    })
    this.updateId = 0;
  }

  getProduct(id: any) {
    this.formHeader = 'Update product';
    this.updateId = id;
    this.productService.getProductById(id).subscribe(data => {
      this.productForm.patchValue({
        name: data.name,
        quantity: data.quantity,
        price: data.price,
        category: data.category.id,
        buttonName: 'Save'
      })
      this.visible = true;
    })
  }

  pageChanged(event: any) {
    this.pageIndex = event.first;
    this.pageSize = event.rows;
    if (this.textSearch) {
      this.search();
    } else {
      this.getAllProduct();
    }
  }

  showDialog() {
    this.formHeader = 'Add product';
    this.visible = !this.visible;
    this.productForm.patchValue({
      name: '',
      quantity: 0,
      category: 0,
      price: 0,
      buttonName: 'ADD'
    })
  }

  deleteConfirm(del: boolean, id: any) {
    this.delete.visible = del;
    this.delete.productId = id;
  }

  deleteProduct() {
    this.productService.deleteProduct(this.delete.productId).subscribe(data => {
      this.products = data.slice(this.pageIndex, this.pageSize * (this.pageIndex + 1));
      this.totalElements = data.length;
      this.deleteConfirm(false, 0);
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Product delete successful',
      });
    });
  }

  private setProductList(data: any) {
    this.products = data.slice(this.pageIndex, this.pageSize * (this.pageIndex + 1));
    this.totalElements = data.length;
  }

  //format currency
  formatCurrency(){
    const currency = this.productForm.controls.price?.value;
    console.log(currency)
    this.productForm.controls.price.setValue(currency.replace(/\B(?=(\d{3})+(?!\d))/g, ','))
  }
}
