import { Component, OnInit  } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  li:any;
  lis: Array<any>;
  constructor(private http : HttpClient){
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3001/api/getProductData')
    .subscribe(Response => {
 
      // If response comes hideloader() function is called
      // to hide that loader
   
      console.log(Response)
      this.li=Response;
      this.lis=this.li.packages;
      

      console.log(this.lis)
    }); 
  }


}
