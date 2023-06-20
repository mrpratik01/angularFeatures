import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import axios from 'axios';
@Component({

  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})


export class CrudComponent implements OnInit  { 

  myForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      email: '',
      message: ''
    });
  }


  async onSubmit(form: FormGroup) {

    try{

      await axios.post("http://localhost:3001/api/storeFormData", {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      })



      console.log(form.valid); // true or false
      console.log(form.value.name);
      console.log(form.value.email);
      console.log(form.value.message);
    }
    catch (err){ console.log(err)}
  }

}
