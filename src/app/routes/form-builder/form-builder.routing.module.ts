import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: 'form-builder', component: FormBuilderComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormBuilderRoutingModule { }