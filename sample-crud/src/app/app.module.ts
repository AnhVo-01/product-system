import { NgModule } from '@angular/core';
import {ProductModule} from "./module/product/product.module";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {AuthModule} from "./module/auth/auth.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProductModule,
    AuthModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [],
  providers: []
})
export class AppModule { }
