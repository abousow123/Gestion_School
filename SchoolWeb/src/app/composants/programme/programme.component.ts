import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { Programme } from 'src/app/models/programme';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent implements OnInit {


  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', { static: true }) row: ElementRef;

  elements: any = [];
  headElements = ['code_programme', 'libelle', 'Price','Drop Off','Action'];

  programmes: Programme[]  = [];
  tuit: any ;

  searchText: string = '';
  previous: string;

  maxVisibleItems: number = 8;

  constructor(private cdRef: ChangeDetectorRef, private etudiantService: SchoolService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _formBuilder: FormBuilder,) {
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
    for (let i = 1; i <= 25; i++) {
      this.elements.push({id: i.toString(), first: 'Wpis ' + i, last: 'Last ' + i, handle: 'Handle ' + i});
    }


    this.etudiantService.getProgrammes()
    .subscribe(data=>{
      this.tuit = data;
      this.programmes = this.tuit._embedded.programmes ;

      this.mdbTable.setDataSource(this.programmes);
      this.programmes = this.mdbTable.getDataSource();
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

  addNewRow() {
    this.mdbTable.addRow({
      firstName: this.elements.length.toString(),
      first: 'Wpis ' + this.elements.length,
      last: 'Last ' + this.elements.length,
      handle: 'Handle ' + this.elements.length
    });
    this.emitDataSourceChange();
  }

  addNewRowAfter() {
    this.mdbTable.addRowAfter(1, {firstName: '', lastName: 'Nowy', address: 'Row', email: 'Kopytkowy'});
    this.mdbTable.getDataSource().forEach((el: any, index: any) => {
      el.id = (index + 1).toString();
    });
    this.emitDataSourceChange();
  }

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
      this.programmes = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.programmes = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();

    this.mdbTable.searchDataObservable(this.searchText).subscribe(() => {
      this.mdbTablePagination.calculateFirstItemIndex();
      this.mdbTablePagination.calculateLastItemIndex();
    });
  }

  remove(){

  }


}
