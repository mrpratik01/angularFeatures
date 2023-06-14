import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {

    this.getDateForm()
  }



  getDateForm() {
    return this.http.get<any>("http://localhost:3001/api/getFormData").subscribe(Response => {
      this.data = Response
      console.log(Response)
    })

    
  }

  data = []

}
