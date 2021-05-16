import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DetailFormComponent } from './components/detail-form/detail-form.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidePanelComponent,
    BodyComponent,
    LoginComponent,
    ProductCardComponent,
    CartComponent,
    ProductDescriptionComponent,
    ProductGridComponent,
    DetailFormComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  exports: [HeaderComponent,
    FooterComponent,
    SidePanelComponent,
    BodyComponent,
    LoginComponent,
    ProductCardComponent,
    CartComponent,
    ProductDescriptionComponent,
    ProductGridComponent]
})
export class SharedModule { }
