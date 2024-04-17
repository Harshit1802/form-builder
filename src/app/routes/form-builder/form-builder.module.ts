import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormBuilderRoutingModule } from './form-builder.routing.module';
import { XpComponentComponent } from './xp-component/xp-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RowContainerComponent } from './row-container/row-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigurationComponent } from './configuration/configuration.component';




@NgModule({
  declarations: [
    XpComponentComponent,
    FormBuilderComponent,
    RowContainerComponent,
    ConfigurationComponent
  
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormBuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormBuilderModule { }
