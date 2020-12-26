import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { Classe } from 'src/app/models/classe';
import { SchoolService } from 'src/app/services/school.service';




@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {


  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', { static: true }) row: ElementRef;

  classes: any = [] ;
  etu: any ;

  elements: any = [];
  headElements = ['code', 'libelle', 'nbre_max_etudiant','Action'];

  searchText: string = '';
  previous: string;


  maxVisibleItems: number = 15;



  constructor(private cdRef: ChangeDetectorRef, private etudiantService: SchoolService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {


     iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/create.svg'));
      iconRegistry.addSvgIcon(
        'view',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/eye.svg'));

        iconRegistry.addSvgIcon(
          'edit',
          sanitizer.bypassSecurityTrustResourceUrl('assets/images/edit.svg'));

        iconRegistry.addSvgIcon(
          'delete',
          sanitizer.bypassSecurityTrustResourceUrl('assets/images/delete.svg'));

  }

  @HostListener('input') oninput() {
    this.mdbTablePagination.searchText = this.searchText;
  }
  ngOnInit() {
    for (let i = 1; i <= 25; i++) {
      this.elements.push({id: i.toString(), first: 'Wpis ' + i, last: 'Last ' + i, handle: 'Handle ' + i});
    }


    this.etudiantService.getClasses()
    .subscribe(data=>{
      this.etu = data;
      this.classes = this.etu._embedded.classes ;
      this.mdbTable.setDataSource(this.classes);
      this.classes = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();

    },err=>{
      console.log(err);
    })





  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(this.maxVisibleItems);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();

  }

  /* addNewRow() {
    this.mdbTable.addRow({
      id: this.elements.length.toString(),
      first: 'Wpis ' + this.elements.length,
      last: 'Last ' + this.elements.length,
      handle: 'Handle ' + this.elements.length
    });
    this.emitDataSourceChange();
  } */

 /*  addNewRowAfter() {
    this.mdbTable.addRowAfter(1, {id: '2', first: 'Nowy', last: 'Row', handle: 'Kopytkowy'});
    this.mdbTable.getDataSource().forEach((el: any, index: any) => {
      el.id = (index + 1).toString();
    });
    this.emitDataSourceChange();
  } */

  removeLastRow() {
    this.mdbTable.removeLastRow();
    this.emitDataSourceChange();
    this.mdbTable.rowRemoved().subscribe((data: any) => {
      console.log(data);
    });
  }

  removeRow() {
    this.mdbTable.removeRow(1);
    this.mdbTable.getDataSource().forEach((el: any, index: any) => {
      el.id = (index + 1).toString();
    });
    this.emitDataSourceChange();
    this.mdbTable.rowRemoved().subscribe((data: any) => {
      console.log(data);
    });
  }

  emitDataSourceChange() {
    this.mdbTable.dataSourceChange().subscribe((data: any) => {
      console.log(data);
    });
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.classes = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.classes = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();

    this.mdbTable.searchDataObservable(this.searchText).subscribe(() => {
      this.mdbTablePagination.calculateFirstItemIndex();
      this.mdbTablePagination.calculateLastItemIndex();
    });
  }

  editRow(t){

  }
  removeRow1(el){

  }
}
