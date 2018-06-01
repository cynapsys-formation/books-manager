import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsComponent } from './book-details.component';
import {SharedModule} from '../../shared/shared.module';
import {BooksRoutingModule} from '../books-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule} from '@angular/material';
import {BooksService} from '../books.service';
import {BooksResolver} from '../books.resolver';
import {BooksSavePageComponent} from '../books-save-page/books-save-page.component';
import {DatatableComponent} from '../datatable/datatable.component';
import {BooksDetailsPageComponent} from '../books-details-page/books-details-page.component';
import {BookFormComponent} from '../book-form/book-form.component';
import {BooksListComponent} from '../books-list/books-list.component';
import {BooksPageComponent} from '../books-page/books-page.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
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
      declarations: [
        BooksPageComponent,
        BooksListComponent,
        DatatableComponent,
        BookDetailsComponent,
        BookFormComponent,
        BooksDetailsPageComponent,
        BooksSavePageComponent ],
      providers: [
        BooksService, BooksResolver
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
