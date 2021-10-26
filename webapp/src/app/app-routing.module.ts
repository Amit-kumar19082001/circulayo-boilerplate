import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIGPageComponent } from './Management/uig-page/uig-page.component'; 
import { LandingComponent } from './Client-side/landing/landing.component';
import { ItemTypeManagementComponent } from './Management/item-type-management/item-type-management.component';
import { GenerateUniqueCodesComponent } from './Management/generate-unique-codes/generate-unique-codes.component';
const routes: Routes = [
  { path:'',redirectTo:'/landing', pathMatch: 'full' },
  { path:'landing', component: LandingComponent },
  { path:'uig', component: UIGPageComponent},
  { path:'itemtypemanagement', component: ItemTypeManagementComponent},
  { path:'uic_page/:id/:no',component:GenerateUniqueCodesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
