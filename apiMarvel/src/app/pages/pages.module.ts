import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NopagefoundComponent,
    PagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    DashboardComponent,
    NopagefoundComponent 
  ]
})
export class PagesModule { }
