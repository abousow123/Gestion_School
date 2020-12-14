import { NgModule } from '@angular/core';

import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';



const MaterialComponents = [
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatIconModule,
  MatSelectModule
]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
