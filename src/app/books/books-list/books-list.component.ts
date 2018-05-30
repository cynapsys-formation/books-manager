import {Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Book} from '../book';


@Component({
  selector: 'cyn-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() books: Array<Book>;
  @Output() selectedBookEvent: EventEmitter<Book> = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  onBookSelect(book) {
    console.log('onBookSelect:', book);
    this.selectedBookEvent.emit(book);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
