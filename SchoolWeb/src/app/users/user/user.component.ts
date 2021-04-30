import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { Role, User } from 'src/app/models/user';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', { static: true }) row: ElementRef;


  etu: any ;

  headElements = ['firstName', 'lastName', 'login','tel','action'];

  searchText: string = '';
  previous: string;


  maxVisibleItems: number = 10;
  d: any ;

  users: any = [] ;
  roles: any = [] ;

  userForm: FormGroup;
  user: User = new User();
  role: Role = new Role();

  model: string = '';
  roles1: any;
  r:any;


  constructor(private cdRef: ChangeDetectorRef, private etudiantService: SchoolService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private router: Router, private _formBuilder: FormBuilder) {
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
    this.userForm = this._formBuilder.group({
      firstName:([this.user.firstName, Validators.required]),
      lastName:([this.user.lastName, Validators.required]),
      password:([this.user.password,Validators.required]),
      login:([this.user.login,Validators.required]),
      confirmPassword:(['',Validators.required]),
      activeUser:([this.user.userActive,Validators.required]),
      authority:([2,Validators.required]),
      tel:([this.user.tel,Validators.required])
    });

    this.getListUsers();

    this.etudiantService.getRoles()
    .subscribe(
      response => {
        this.r = response  ;
        this.roles1 = this.r._embedded.roles
      },err=>{
        console.log(err);
      }
    );

  }

  getListUsers(){
    this.etudiantService.getUsers()
    .subscribe(data=>{
      this.etu = data;
      this.users = this.etu  ;
      console.log(this.users);

      this.mdbTable.setDataSource(this.users);
      this.users = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();

    },err=>{
      console.log(err);

    }) ;
  }

  getRoles(user){

    this.etudiantService.getRolesUser(user)
    .subscribe(data=>{
      this.etu = data;
      this.roles = this.etu._embedded.roles  ;

    },err=>{
      console.log(err);

    }) ;

  }

  test(){
    // console.log("test id ===> "+ this.userForm.value.authority);

   }


  OnSave(){
    this.user.firstName = this.userForm.value.firstName ;
    this.user.lastName = this.userForm.value.lastName ;
    this.user.login = this.userForm.value.login;
    this.user.password = this.userForm.value.password ;
    this.user.userActive = this.userForm.value.activeUser ;

    this.etudiantService.getRole(parseInt(this.userForm.value.authority))
    .subscribe(
      response => {
        this.role = response as Role  ;
        this.user.roles.push(this.role);
        this.etudiantService.saveUser(this.user)
        .subscribe(resp => {
          this.user = resp as User ;
          this.getListUsers();
        },err=>{
          console.log(err);
        })
      },err=>{
        console.log(err);
      }
    );





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
      this.users = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.users = this.mdbTable.searchLocalDataBy(this.searchText);
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
  onRemove(el){
    this.d = el as User ;
    console.log("test user =====>>>>"+JSON.stringify(this.d));

    this.etudiantService.deleteUser(this.d.id)
    .subscribe(data=>{
      this.getListUsers();

    },err=>{
      console.log(err);

    }) ;

  }

  onDetails(el){
    this.router.navigate(['settings/detailUser', el]) ;
  }
}
