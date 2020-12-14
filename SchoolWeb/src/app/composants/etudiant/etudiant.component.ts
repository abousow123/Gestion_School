import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { Etudiant } from 'src/app/models/etudiant';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

 
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', { static: true }) row: ElementRef;


  etu: any ;

  headElements = ['firstName', 'lastName', 'address', 'email', 'telephone', 'nationalite','registration fees','action'];

  searchText: string = '';
  previous: string;


  maxVisibleItems: number = 10;

  etudiants: any = [] ;


  constructor(private cdRef: ChangeDetectorRef, private etudiantService: SchoolService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private router: Router) {
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

        iconRegistry.addSvgIcon(
          'true',
          sanitizer.bypassSecurityTrustResourceUrl('assets/images/true.svg'));
        
        iconRegistry.addSvgIcon(
          'no',
          sanitizer.bypassSecurityTrustResourceUrl('assets/images/no.svg'));
  }

  @HostListener('input') oninput() {
    this.mdbTablePagination.searchText = this.searchText;
  }

  ngOnInit() {


    this.etudiantService.getEtudiants()
    .subscribe(data=>{
      this.etu = data;
      this.etudiants = this.etu._embedded.etudiants  ;
      console.log(this.etudiants);

      this.mdbTable.setDataSource(this.etudiants);
      this.etudiants = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();
      
    },err=>{
      console.log(err);
      
    }) ;

   
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
      this.etudiants = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.etudiants = this.mdbTable.searchLocalDataBy(this.searchText);
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

  onDetails(el){
    this.router.navigate(['detailEtudiant', el]) ;
  }
}
