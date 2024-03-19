import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductViewComponent} from "./product-view/product-view.component";
import {CommonModule} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {DialogModule} from "primeng/dialog";
import {PaginatorModule} from "primeng/paginator";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', title: '', component: ProductViewComponent}
]

@NgModule({
  declarations: [
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    DialogModule,
    PaginatorModule,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [MessageService]
})
export class ProductModule { }
