import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { CrudComponent } from './crud/crud.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {

    component: SliderComponent,
    path: 'slider'
  },

  {
    component: CrudComponent,
    path: 'crud'
  },
  {
    component: CartComponent,
    path: 'cart'
  },

]


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
