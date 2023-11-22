import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {path:'add',component:AddCartComponent},
  {path:'main',component:MainComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
