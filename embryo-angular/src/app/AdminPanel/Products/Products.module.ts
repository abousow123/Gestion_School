import { AdminAccountModule } from './Products/AdminAccount/AdminAccount.module';
import { AuthenticationService } from './../../Services/authentication.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { EditProductComponent } from './EditProduct/EditProduct.component';
import { AddProductComponent } from './AddProduct/AddProduct.component';
import { GlobalModule} from '../../Global/Global.module';
import { ProductsComponent } from './Products/Products.component';
import { ProductsRoutes} from './Products.routing';
import { SchoolService } from 'src/app/Services/school.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { EtudiantDetailsComponent } from './etudiant-details/etudiant-details.component';

@NgModule({
   declarations: [ProductsComponent, EditProductComponent, AddProductComponent, EtudiantDetailsComponent],
   imports: [
      CommonModule,
      FlexLayoutModule,
      MatSidenavModule,
      MatIconModule,	      
		MatCheckboxModule,
      MatButtonModule,
      MatSelectModule,
      MatCardModule,
      MatMenuModule,
      MatOptionModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatDividerModule,
      MatListModule, 
      RouterModule.forChild(ProductsRoutes),
      TranslateModule,
      MatPaginatorModule,
      MatSortModule,
      MatGridListModule,
      GlobalModule,
      FormsModule,
      ReactiveFormsModule,
      AdminAccountModule
   ],
   providers: [
		SchoolService,
      AuthenticationService,
      { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
      JwtHelperService
	]
})
export class ProductsModule { }
