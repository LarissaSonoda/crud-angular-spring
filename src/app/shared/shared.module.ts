import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material/app-material.module';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    MatButtonModule
  ],
  exports: [ErrorDialogComponent]
})
export class SharedModule { }
