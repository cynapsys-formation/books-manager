import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksPageComponent } from './books-page/books-page.component';
import { BooksListComponent } from './books-list/books-list.component';

import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import { BookDetailsComponent } from './book-details/book-details.component';
import {SharedModule} from '../shared/shared.module';
import {BooksService} from './books.service';


import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    BooksRoutingModule,

    MatButtonModule,
    MatIconModule,
    MatCardModule,

    SharedModule
  ],
  declarations: [BooksPageComponent, BooksListComponent, BookDetailsComponent],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
