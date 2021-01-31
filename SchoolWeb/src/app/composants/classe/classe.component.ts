import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  classeForm: FormGroup;


  maxVisibleItems: number = 15;

  classe: Classe = new Classe();



  constructor(private cdRef: ChangeDetectorRef, private etudiantService: SchoolService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private _formBuilder: FormBuilder) {


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

    this.classeForm = this._formBuilder.group({
      code:([this.classe.code, Validators.required]),
      libelle:([this.classe.libelle, Validators.required]),
      nbre_max_etudiant:([this.classe.nbre_max_etudiant, Validators.required]),
    });

    for (let i = 1; i <= 25; i++) {
      this.elements.push({id: i.toString(), first: 'Wpis ' + i, last: 'Last ' + i, handle: 'Handle ' + i});
    }

    this.getClasses();


  }

  getClasses(){
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

  deleteClasses(el){

    this.etudiantService.deleteClasse(el._links.classe.href)
    .subscribe(data=>{
      this.getClasses();
    },err=>{
      console.log(err);

    })

  }

  postClasse(){
    this.classe.code = this.classeForm.value.code;
    this.classe.libelle = this.classeForm.value.libelle;
    this.classe.nbre_max_etudiant = this.classeForm.value.nbre_max_etudiant;

    this.etudiantService.saveClasse(this.classe)
    .subscribe(data=>{
      this.getClasses();
    },err=>{
      console.log(err);

    })

  }

  updateclasseForm(el){

    this.classe.id = el.id;
    this.classeForm.setValue({code:el.code,libelle: el.libelle,nbre_max_etudiant: el.nbre_max_etudiant})

  }

  updateClasse(){

    this.classe.code = this.classeForm.value.code;
    this.classe.libelle = this.classeForm.value.libelle;
    this.classe.nbre_max_etudiant = this.classeForm.value.nbre_max_etudiant;

    this.etudiantService.editClasse(this.classe.id,this.classe)
    .subscribe(data=>{
      this.getClasses();
    },err=>{
      console.log(err);

    })

  }
}
