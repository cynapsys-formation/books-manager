import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksPageComponent} from './books-page/books-page.component';
import {BooksDetailsPageComponent} from './books-details-page/books-details-page.component';
import {BooksSavePageComponent} from './books-save-page/books-save-page.component';

const routes: Routes = [
  { path: '', component: BooksPageComponent },
  { path: 'details/:id', component: BooksDetailsPageComponent },
  { path: 'new', component: BooksSavePageComponent },
  { path: 'edit/:id', component: BooksSavePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
