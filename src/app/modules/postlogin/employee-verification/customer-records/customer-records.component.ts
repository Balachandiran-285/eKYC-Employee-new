import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
// mat datatable script code block 1 starts
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}
/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
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
/**
 * @title Data table with sorting, pagination, and filtering.
 */
// mat datatable script code block 1 ends

@Component({
  selector: 'app-customer-records',
  templateUrl: './customer-records.component.html',
  styleUrls: ['./customer-records.component.scss']
})

export class CustomerRecordsComponent implements AfterViewInit {
  
  // mat datepicker script code block 1 starts
  myGroup: FormGroup | any;
  dateRangeForm: FormGroup;
  // mat datepicker script code block 1 ends

  // mat datatable script code block 1 starts
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // mat datatable script code block 1 ends

  constructor(private router: Router, private formBuilder: FormBuilder) {
    // mat datepicker script code block 2 starts
    this.dateRangeForm = this.formBuilder.group({
      startDate: null,
      endDate: null
    }, { validator: this.dateRangeValidator });
    // mat datatable script code block 2 starts
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    // mat datatable script code block 2 ends
  }
  dateRangeValidator(formGroup: FormGroup) {
    const startDateControl = formGroup.get('startDate');
    const endDateControl = formGroup.get('endDate');
    const startDate = startDateControl ? startDateControl.value : null;
    const endDate = endDateControl ? endDateControl.value : null;
    if (startDate && endDate && startDate > endDate) {
      return { dateRangeError: true };
    }
    return null;
  }
  // mat datepicker script code block 2 ends
  ngAfterViewInit() {
    // mat datepicker script code block 3 starts
    this.myGroup = new FormGroup({
      startDate: new FormControl(),
      endDate: new FormControl()
    });
    // mat datepicker script code block 3 ends
    // mat datatable script code block 3 starts
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // mat datatable script code block 3 ends
  }
  // mat datatable script code block 4 starts
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // mat datatable script code block 4 ends
  goToCustomerInfo() {
    console.log("clicked");
   this.router.navigate(['/customer-info']);
  }
}
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';
  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };


}