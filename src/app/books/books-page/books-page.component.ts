import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {retry, retryWhen, take} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {BooksService} from '../books.service';

@Component({
  selector: 'cyn-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  books: Array<Book>;
  books$: Observable<Array<Book>>;
  selectedBook: Book;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.loadData();
    this.loadDataPromise();
    this.loadDataObs();
  }

  onSelectedBookEvent($event) {
   // this.selectedBook = book;
    console.log($event);
    this.selectedBook = Object.assign({}, $event);
  }

  private loadData() {
    this.books = this.loadDataStatic();
    const books$ = of(this.loadDataStatic());
    this.books$ = books$.pipe(
      take(2)
      // filter((book: Book) => book.title === 'Book 2')
    );
  }

  private loadDataObs() {
    // Observable
    this.booksService.loadDataObs().pipe(
      retry(10)
    ).subscribe((data) => {
      console.log('loadDataObservable', data);
      this.books = data;
    }, (error) => {
      console.log('error', error);
    }, () => {
      console.log('finally');
    });
  }

  private loadDataPromise() {
    // Promise
    this.booksService.loadDataPromise().then((data) => {
      console.log('loadDataPromise', data);
      this.books = data;
    }, (error) => {
      console.log('error', error);
    });
  }

  loadDataStatic(): Array<Book> {
    return this.booksService.loadDataStatic();
  }

}
