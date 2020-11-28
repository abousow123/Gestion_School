import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, ElementRef, HostListener, PipeTransform, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import { EtudiantService } from 'src/app/services/etudiant/etudiant.service';
import { CountryService } from './countri.service';
import { Etudiant } from './country';

import {AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { NgbdSortableHeader, SortColumn, SortDirection, SortEvent } from './sortable.country';

 
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];



@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

 // countries$: Observable<Etudiant[]>;
  total$: Observable<number>;
   private _total$ ;

 // private _total$ = new BehaviorSubject<number>(0);

 @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  public etudiants;

  /* @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>; */

  constructor(public service: CountryService,private etudiantService: EtudiantService) {
   // this.countries$ = service.countries$;
  //  this.total$ = service.total$;

  const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

  }




  ngOnInit(): void {
    this.etudiantService.getEtudiants()
    .subscribe(data=>{
      this.etudiants = data;
     this._total$ = this.etudiants.page.totalElements;
      console.log(this._total$);
      this.total$ = this._total$;
      console.log(this.total$); 
  
      
    },err=>{
      console.log(err);
      
    })

    

  }


 
  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
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

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
 


}





