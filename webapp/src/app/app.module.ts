import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './General/navbar/navbar.component';
import { LandingComponent } from './Client-side/landing/landing.component';
import { SearchSortComponent } from './General/search-sort/search-sort.component';
import {DevExtremeModule,DxDataGridComponent} from 'devextreme-angular';
import { UIGPageComponent } from './Management/uig-page/uig-page.component';
import { ItemTypeManagementComponent } from './Management/item-type-management/item-type-management.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    SearchSortComponent,
    UIGPageComponent,
    ItemTypeManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DevExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
