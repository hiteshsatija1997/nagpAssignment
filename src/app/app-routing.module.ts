import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { BodyComponent } from './shared/components/body/body.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { DetailFormComponent } from './shared/components/detail-form/detail-form.component';
import { LoginComponent } from './shared/components/login/login.component';
import { ProductDescriptionComponent } from './shared/components/product-description/product-description.component';
import { SearchComponent } from './shared/components/search/search.component';

const routes: Routes = [
  { path: "cart", component: CartComponent , canActivate: [AuthGuard]},
  { path: "checkout", component: DetailFormComponent, canActivate: [AuthGuard] },
  { path: "product", component: ProductDescriptionComponent },
  { path: "login", component: LoginComponent },
  { path: "search", component: SearchComponent },
  { path: "**", component: BodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
