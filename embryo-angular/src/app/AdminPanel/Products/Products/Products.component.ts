import { SchoolService } from './../../../Services/school.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
	selector: 'app-products',
	templateUrl: './Products.component.html',
	styleUrls: ['./Products.component.scss']
})

export class ProductsComponent implements OnInit {
	
	productsList 		      : any;
	productsGrid 			   : any;
	popUpDeleteUserResponse : any;
	etudiants				: any;
	etu				: any;
	showType	    				: string = 'list';
	//displayedProductColumns : string [] = ['id', 'image','name','brand','category', 'product_code', 'discount_price', 'price','action' ];
	displayedProductColumns : string [] = ['Num', 'image','name','Address','Tel', 'Email', 'Fees', 'action' ];
	@ViewChild(MatPaginator) paginator : MatPaginator;
	@ViewChild(MatSort) sort           : MatSort;

	constructor(public translate : TranslateService,
					private router : Router, 
					private adminPanelService : AdminPanelServiceService,
					private etudiantService: SchoolService) { }

	ngOnInit() {
		this.adminPanelService.getProducts().valueChanges().subscribe(res => this.getProductResponse(res));
		//this.adminPanelService.getEtudians().valueChanges().subscribe(res => this.getEtudiantResponse(res));
		//this.etudiants= this.etudiantService.getEtudiants();

	 	this.etudiantService.getEtudiants()
		.subscribe(data=>{
		  this.etu = data ;
		  this.etudiants = this.etu  ;
		  console.log(this.etudiants);
		  
		},err=>{
			console.log("test ===");
		  	console.log(err);
	
		}) ; 
	}

	//getProductResponse method is used to get the response of all products.
 	public getProductResponse(response) {
		console.log(" test ==> "+response);
      this.productsGrid = null;
      let products = ((response.men.concat(response.women)).concat(response.gadgets)).concat(response.accessories);
      this.productsGrid = products;
   }

   	//getProductResponse method is used to get the response of all products.
 	public getEtudiantResponse(response) {
		
		 
		this.etudiants = response ;
	 }

  	/**
	  * productShowType method is used to select the show type of product.
	  */
	productShowType(type) {
		this.showType = type;
		if(type == 'list'){
			document.getElementById('list').classList.add("active");
			document.getElementById('grid').classList.remove('active');
			this.productsList = new MatTableDataSource(this.etudiants);
			setTimeout(()=>{
				this.productsList.paginator = this.paginator;
				this.productsList.sort = this.sort;
			},0)
			
		}
		else{
			document.getElementById('grid').classList.add("active");
			document.getElementById('list').classList.remove('active');
		}
	}

	/**
	  * onEditProduct method is used to open the edit page and edit the product.
	  */
	onEditProduct(data){
		this.router.navigate(['/admin-panel/product-edit',data.type,data.id]);
		this.adminPanelService.editProductData = data;
	}

	/* 
     *deleteProduct method is used to open a delete dialog.
     */
   deleteProduct(i){
      this.adminPanelService.deleteDialog("Are you sure you want to delete this product permanently?").
         subscribe( res => {this.popUpDeleteUserResponse = res},
                    err => console.log(err),
                    ()  => this.getDeleteResponse(this.popUpDeleteUserResponse,i))
   }

   /**
     * getDeleteResponse method is used to delete a product from the product list.
     */
   getDeleteResponse(response : string,i){
      if(response == "yes"){
      	if(this.showType == 'grid') {
         	this.productsGrid.splice(i,1);
      	}else if(this.showType == 'list'){
				this.productsList.data.splice(i,1);
				this.productsList = new MatTableDataSource(this.productsList.data);
      		this.productsList.paginator = this.paginator;
      	}
      }
   }

   onSeeDialog(){
	this.router.navigate(['/count/']);
	this.router.navigate([import('./AdminAccount/AdminAccount.module').then (m => m.AdminAccountModule)]);
	
   }

   onStudentDetails(element){
	this.router.navigate(['admin-panel/student-detail',element.id]);
	//this.adminPanelService.editProductData = data;
	   
   }
}
