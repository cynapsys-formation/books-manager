import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksPagesComponent } from './books-pages/books-pages.component';

const routes: Routes = [
  {path: '',component: BooksPagesComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
