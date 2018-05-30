import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren:'./pages/pages.module#PagesModule'},
  {path: 'books', loadChildren:'./books/books.module#BooksModule'},
  {path: '**', pathMatch:'full', redirectTo:'/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
