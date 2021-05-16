import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './shared/components/body/body.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { DetailFormComponent } from './shared/components/detail-form/detail-form.component';
import { LoginComponent } from './shared/components/login/login.component';
import { ProductDescriptionComponent } from './shared/components/product-description/product-description.component';

const routes: Routes = [
  { path: "cart", component: CartComponent },
  { path: "checkout", component: DetailFormComponent },
  { path: "product", component: ProductDescriptionComponent },
  { path: "login", component: LoginComponent },
  { path: "search", component: BodyComponent },
  { path: "**", component: BodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
