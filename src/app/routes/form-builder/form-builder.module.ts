import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormBuilderRoutingModule } from './form-builder.routing.module';
import { XpComponentComponent } from './xp-component/xp-component.component';
import { FormsModule } from '@angular/forms';
import { RowContainerComponent } from './row-container/row-container.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    XpComponentComponent,
    FormBuilderComponent,
    RowContainerComponent
  
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormBuilderRoutingModule,
    FormsModule
  ]
})
export class FormBuilderModule { }
