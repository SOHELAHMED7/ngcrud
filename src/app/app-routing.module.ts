import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaincrudpageComponent } from './component/fruit/maincrudpage/maincrudpage';
import { AddFruitComponent } from './component/fruit/add/AddFruitComponent';
import { EditFruitComponent } from './component/fruit/edit/EditFruitComponent';
import { ViewFruitComponent } from './component/fruit/view/ViewFruitComponent';

const routes: Routes = [
  { path: '', redirectTo: '/fruits', pathMatch: 'full' },
  { path: 'fruits', component: MaincrudpageComponent },
  { path: 'fruits/add', component: AddFruitComponent },
  { path: 'fruits/edit/:id', component: EditFruitComponent },
  { path: 'fruits/view/:id', component: ViewFruitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
