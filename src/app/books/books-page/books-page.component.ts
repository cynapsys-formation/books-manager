import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {retry, retryWhen, take,} from 'rxjs/operators';
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

    // Promise
    this.loadDataPromise().then((data) => {
      console.log('loadDataPromise', data);
      this.books = data;
    }, (error) => {
        console.log('error', error);
    });

    // Observable
   this.loadDataObs().pipe(
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

  private loadDataStatic(): Array<Book> {
    return [
      { id: 121, title: 'Book 1', year: 2016},
      { id: 232, title: 'Book 2', year: 2017},
      { id: 33, title: 'Book 3', year: 2018},
      { id: 43, title: 'Book 4', year: 2015},
      { id: 534, title: 'Book 5', year: 2014}
    ];
  }

  private loadDataObs(): Observable<Array<Book>> {
    return of(this.loadDataStatic());
  }

  private loadDataPromise(): Promise<Array<Book>> {
    return Promise.resolve(this.loadDataStatic());
  }

}
