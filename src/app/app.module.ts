import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { SliderComponent } from './slider/slider.component';
import { CrudComponent } from './crud/crud.component';
import { CartComponent } from './cart/cart.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({


  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    CrudComponent,
    CartComponent,
    ProductCardComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    NgIf,
    ReactiveFormsModule,

    HttpClientModule,

   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

