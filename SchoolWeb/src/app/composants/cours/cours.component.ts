import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { Cours } from 'src/app/models/cours';
import { Programme } from 'src/app/models/programme';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {


  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', { static: true }) row: ElementRef;

  elements: any = [];
  headElements = ['code', 'libelle','Programme','description','Action'];

  cours: any = [] ;
  etu: any ;

  searchText: string = '';
  previous: string;

  maxVisibleItems: number = 8;

  programmes: any ;
  resp: any ;
  idProgramme: number = 0;
  programme: Programme = new Programme();
  cour: Cours = new Cours() ;

  demandeFile: any = File;

  @ViewChild('fileInput') fileInput: ElementRef;
 fileAttr = 'Choose File';

 coursForm: FormGroup;

  constructor(private cdRef: ChangeDetectorRef, private etudiantService: SchoolService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _formBuilder: FormBuilder) {
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


    this.etudiantService.getCours()
    .subscribe(data=>{
      this.etu = data;
      this.cours = this.etu ;

      this.mdbTable.setDataSource(this.cours);
      this.cours = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();

    },err=>{
      console.log(err);

    })

    this.getProgrammes() ;

    this.coursForm = this._formBuilder.group({
      code:([this.cour.code, Validators.required]),
      libelle:([this.cour.libelle, Validators.required]),
      description:([this.cour.description, Validators.required]),
    });


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
      this.cours = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.cours = this.mdbTable.searchLocalDataBy(this.searchText);
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


  getProgrammes(){
    this.etudiantService.getProgrammes()
    .subscribe(data =>{
      this.resp = data;
      this.programmes = this.resp._embedded.programmes;

    },err=>{
      console.log(err);

    });
  }

  getOneProgramme(){
    this.etudiantService.getOneProgramme(this.idProgramme)
    .subscribe(data =>{
      this.resp = data;

      this.programme.code_programme = this.resp.code_programme;
      this.programme.libelle = this.resp.libelle ;
      this.programme.prix = this.resp.prix ;
      this.programme.dropOff = this.resp.dropOff ;
      this.programme.id = this.resp.id ;

    },err=>{
      console.log(err);

    });
  }

  postCours(){

    this.cour.code = this.coursForm.value.code ;
    this.cour.libelle = this.coursForm.value.libelle ;
    this.cour.description = this.coursForm.value.description ;

    const formData = new FormData();

    formData.append('cours',JSON.stringify(this.cour));
    formData.append('programme',JSON.stringify(this.programme));
    formData.append('file',this.demandeFile)

    this.etudiantService.getPostCours(formData)
    .subscribe(data =>{
      this.resp = data;

    },err=>{
      console.log(err);

    });



  }

  uploadFileEvt(imgFile: any) {

    if (imgFile.target.files && imgFile.target.files[0]) {

      this.demandeFile = imgFile.target.files[0] ;

      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: File) => {

        this.fileAttr += file.name ;
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
          //console.log(imgBase64Path);
          //this.dataimage = imgBase64Path;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);

      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'Choose File';
    }

  }


  onSelectFile(event) {
    const file = event.target.files[0];
    this.demandeFile = file;
  }


}
