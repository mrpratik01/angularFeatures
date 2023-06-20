
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})

export class TableComponent implements OnInit{


  li:any;
  lis: Array<any>;
  constructor(private http : HttpClient){
  }
  ngOnInit(): void {
    this.http.get<any>('http://localhost:3001/api/getFormData')
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
