import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  {path: 'login', title: '', component: LoginComponent}
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    FormsModule
  ]
})
export class AuthModule { }
