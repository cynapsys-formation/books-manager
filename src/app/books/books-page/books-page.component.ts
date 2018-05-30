import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'cyn-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  books: Array<Book>;
  books$: Observable<Array<any>>;
  selectedBook: Book;
  constructor() { }

  ngOnInit() {
    this.loadData();
  }
  onSelectedBookEvent(book){
    //this.selectedBook=book;
    this.selectedBook=Object.assign({}, book);
    }
  loadData(){
    const books: Array<Book> = [
      { id: 1, title: 'Book 1', year: 2010 },
      { id: 2, title: 'Book 2', year: 2012 },
      { id: 3, title: 'Book 3', year: 2014 },
      { id: 4, title: 'Book 4', year: 2016 },
      { id: 5, title: 'Book 5', year: 2018 },
    ];

    this.books = books;
    const books$ = of(books);
    this.books$=books$.pipe(
    //  take(2)
    //  filter((book:Book)=>book.title==="Book 2")
    );
  }
}
