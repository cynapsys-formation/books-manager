import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksPageComponent } from './books-page/books-page.component';
import { BooksListComponent } from './books-list/books-list.component';

import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule} from '@angular/material';
import { BookDetailsComponent } from './book-details/book-details.component';
import {SharedModule} from '../shared/shared.module';
import {BooksService} from './books.service';
import { DatatableComponent } from './datatable/datatable.component';

import {HttpClientModule} from '@angular/common/http';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksDetailsPageComponent } from './books-details-page/books-details-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BooksSavePageComponent } from './books-save-page/books-save-page.component';
import {BooksResolver} from './books.resolver';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    BooksRoutingModule,

    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,

    SharedModule,

  ],
  declarations: [BooksPageComponent, BooksListComponent,
    DatatableComponent,
    BookDetailsComponent,
    BookFormComponent,
    BooksDetailsPageComponent,
    BooksSavePageComponent],
  providers: [
    BooksService, BooksResolver
  ]
})
export class BooksModule { }
