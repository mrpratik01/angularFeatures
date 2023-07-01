import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{

  @Output() myName = new EventEmitter<any>();
  @Output() myEmail = new EventEmitter<any>();
  @Output() myMessage = new EventEmitter<any>();

  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);

    this.myName.emit(form.value.name)
    this.myEmail.emit(form.value.email)
    this.myMessage.emit(form.value.message)
  }

  constructor(private ref:MatDialogRef<PopupComponent>){}

  closepopup(){
    this.ref.close();
  }

}
