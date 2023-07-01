import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})

  

export class DialogComponent implements OnInit {
  // constructor(private dialog: MatDialog) {}

  // displayedColumns = ['position', 'name', 'weight', 'symbol','test','test1','test2','test3','test4','test5','test6','test7','test8'];
  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  // @ViewChild(MatPaginator) paginator: MatPaginator;


  // ngOnInit() {
  //   this.dataSource.paginator = this.paginator;


  //   this.dialog.afterAllClosed.subscribe(() => {
 
  //     console.log('Name:', this.dialog.componentInstance.myName);
  //     console.log('Email:', this.dialog.componentInstance.myEmail);
  //     console.log('Message:', this.dialog.componentInstance.myMessage);
  //   });
  // }
  // Openpopup() {
  //   this.dialog.open(PopupComponent, {
  //     width: '100%',
  //     data: {
  //       title: 'user edit',
  //     },
  //   });
  // }
  dialogRef: MatDialogRef<PopupComponent>;

  constructor(private dialog: MatDialog) {}


  cars: Car[] = [];
  
    ngOnInit() {
        this.cars = [
            {
                id: 1,
                name: "Creta",
                company: "Hyundai",
                number: "MH01BHXX01",
                manufacturedYear: 2016,
                kmDriven: 23456,
                price: "11 Lakhs",
                rating: 4.0
            },
            {
                id: 2,
                name: "Audi Q7",
                company: "Audi",
                number: "UP76APXXX2",
                manufacturedYear: 2006,
                kmDriven: 11342,
                price: "90.2 Lakhs",
                rating: 4.7
            },
            {
                id: 3,
                name: "Venue",
                company: "Hyundai",
                number: "MH11AHXX01",
                manufacturedYear: 2019,
                kmDriven: 45456,
                price: "7.8 Lakhs",
                rating: 3.5
            },
            {
                id: 4,
                name: "Audi A4",
                company: "Hyundai",
                number: "BR01SD1XX0",
                manufacturedYear: 1997,
                kmDriven: 18446,
                price: "49.4 Lakhs",
                rating: 4.5
            },
            {
                id: 5,
                name: "Audi e-tron",
                company: "Audi",
                number: "MP11BPXX00",
                manufacturedYear: 2020,
                kmDriven: 9901,
                price: "1.2 Crore",
                rating: 4.9
            },
        ];
    }

      Openpopup() {
    this.dialogRef = this.dialog.open(PopupComponent, {
      width: '100%',
      data: {
        title: 'user edit',
      },
    });

    // Subscribe to the emitted data from the child component
    this.dialogRef.componentInstance.myName.subscribe((name: any) => {
      console.log('Name:', name);
    });
    this.dialogRef.componentInstance.myEmail.subscribe((email: any) => {
      console.log('Email:', email);
    });
    this.dialogRef.componentInstance.myMessage.subscribe((message: any) => {
      console.log('Message:', message);
    });
  }
}

  // displayedColumns = ['position', 'name', 'weight', 'symbol', 'test', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8'];
  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngOnInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  // Openpopup() {
  //   this.dialogRef = this.dialog.open(PopupComponent, {
  //     width: '100%',
  //     data: {
  //       title: 'user edit',
  //     },
  //   });

  //   // Subscribe to the emitted data from the child component
  //   this.dialogRef.componentInstance.myName.subscribe((name: any) => {
  //     console.log('Name:', name);
  //   });
  //   this.dialogRef.componentInstance.myEmail.subscribe((email: any) => {
  //     console.log('Email:', email);
  //   });
  //   this.dialogRef.componentInstance.myMessage.subscribe((message: any) => {
  //     console.log('Message:', message);
  //   });
  // }


// export interface Element {
//   position: number;
//   name: string;
//   weight: number;
//   symbol: string;
//   test:string;
//   test1:string;
//   test2:string;
//   test3:string;
//   test4:string;
//   test5:string;
//   test6:string;
//   test7:string;
//   test8:string;


// }

// const ELEMENT_DATA: Element[] = [

//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'}
// ];


export interface Car {
  id: number,
  name: string,
  company: string,
  number: string,
  manufacturedYear: number,
  kmDriven: number,
  price: string,
  rating: number
}