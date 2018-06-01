import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AdminGuard} from './core/admin.guard';

const routes: Routes = [
  { path: '', loadChildren: './pages/pages.module#PagesModule'},
  { path: 'books', loadChildren: './books/books.module#BooksModule', canActivate : [ AdminGuard ]},
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
