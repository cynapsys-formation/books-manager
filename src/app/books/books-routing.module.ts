import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksPageComponent} from './books-page/books-page.component';
import {BooksDetailsPageComponent} from './books-details-page/books-details-page.component';
import {BooksSavePageComponent} from './books-save-page/books-save-page.component';
import {BooksResolver} from './books.resolver';

const routes: Routes = [
  { path: '', component: BooksPageComponent },
  { path: 'details/:id',
    component: BooksDetailsPageComponent,
    resolve: {
      bookResolveData: BooksResolver
    },
    data: {
      allowDeletion: false
    }
  },
  { path: 'new', component: BooksSavePageComponent },
  {
    path: 'edit/:id',
    component: BooksSavePageComponent,
    resolve: {
      bookResolveData: BooksResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
