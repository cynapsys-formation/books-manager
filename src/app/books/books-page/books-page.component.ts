import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../book';
import {retry, retryWhen, take} from 'rxjs/operators';
import {Observable, of, Subscription} from 'rxjs';
import {BooksService} from '../books.service';

@Component({
  selector: 'cyn-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit, OnDestroy {
  books: Array<Book>;
  books$: Observable<Array<Book>>;
  selectedBook: Book;
  private subscription: Subscription;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    // this.loadData();
    // this.loadDataPromise();
    // this.loadDataObs();
    this.fetchAll();
  }

  onSelectedBookEvent($event) {
   // this.selectedBook = book;
    console.log($event);
    this.selectedBook = Object.assign({}, $event);
  }

  onDeleteBookEvent(event) {
    this.booksService.remove(event.id).subscribe(() => {
      this.fetchAll();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private fetchAll() {
    this.subscription = this.booksService.fetchAll().subscribe((data: any) => {
      this.books = data;
    });

    this.books$ = this.booksService.fetchAll();
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

  private loadDataStatic(): Array<Book> {
    return this.booksService.loadDataStatic();
  }

}
