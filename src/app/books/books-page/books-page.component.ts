import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {take} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'cyn-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  books: Array<Book>;
  books$: Observable<Array<Book>>;
  selectedBook: Book;

  constructor() { }

  ngOnInit() {
    this.loadData();
  }

  onSelectedBookEvent($event) {
   // this.selectedBook = book;
    console.log($event);
    this.selectedBook = Object.assign({}, $event);
  }

  private loadData() {
    const books: Array<Book> = [
      { id: 121, title: 'Book 1', year: 2016},
      { id: 232, title: 'Book 2', year: 2017},
      { id: 33, title: 'Book 3', year: 2018},
      { id: 43, title: 'Book 4', year: 2015},
      { id: 534, title: 'Book 5', year: 2014}
    ];
    this.books = books;

    const books$ = of(books);
    this.books$ = books$.pipe(
      take(2)
      // filter((book: Book) => book.title === 'Book 2')
    );
  }

}
