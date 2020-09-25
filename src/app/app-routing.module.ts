import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexContainerComponent} from './index-container/index-container.component';

const routes: Routes = [
  {
    path: '',
    component: IndexContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
