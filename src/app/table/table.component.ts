import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';



export interface UserData {
  id: string;
  name: string;
  email: string;
  message: string;
}

const message: string[] = [
'message',
'message',
'message',
'message',
'message',
'message',
'message',
];

const email: string[] = [
'email',
'email',
'email',
'email',
'email',
'email',
'email',

];
const name: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})



export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'message'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}

function createNewUser(id: number): UserData {
  const names =
    name[Math.round(Math.random() * (name.length - 1))] +
    ' ' +
    name[Math.round(Math.random() * (name.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: names,
    email: email[Math.round(Math.random() * (email.length - 1))],
    message: message[Math.round(Math.random() * (message.length - 1))],
  };


}