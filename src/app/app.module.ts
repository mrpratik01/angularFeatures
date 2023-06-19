import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SliderComponent } from './slider/slider.component';
import { CrudComponent } from './crud/crud.component';
import { CartComponent } from './cart/cart.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';



const appRoute: Routes = [
  {path: 'home', component: SliderComponent },
  {path: 'product', component: ProductCardComponent },
  {path: 'crud', component: CrudComponent },
  {path: 'table', component: TableComponent },
  {path: 'cart', component: CartComponent },
  {path: 'footer', component: FooterComponent},
]


@NgModule({


  declarations: [
    AppComponent,

    SliderComponent,
    CrudComponent,
    CartComponent,
    ProductCardComponent,
    TableComponent,
    FooterComponent,
    PricingComponent,

  ],




  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    NgbModule,
    NgbCarouselModule,
    NgIf,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule, MatSliderModule


   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

