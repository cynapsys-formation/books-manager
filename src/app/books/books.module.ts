import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksPageComponent } from './books-page/books-page.component';
import { BooksListComponent } from './books-list/books-list.component';
import {MatButtonModule} from '@angular/material/button';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatButtonModule,
  ],
  declarations: [BooksPageComponent, BooksListComponent, BookDetailsComponent]
})
export class BooksModule { }
