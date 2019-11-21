import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './contact/list/list.component';
import { DetailComponent } from './contact/detail/detail.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'users', component: ListComponent},
  {path: 'users/:id', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
