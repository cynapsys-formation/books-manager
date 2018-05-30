import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksPageComponent } from './books-page/books-page.component';
import { BooksListComponent } from './books-list/books-list.component';

import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,

    MatButtonModule,
    MatIconModule
  ],
  declarations: [BooksPageComponent, BooksListComponent]
})
export class BooksModule { }
