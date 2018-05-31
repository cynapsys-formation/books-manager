import {Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Book} from '../book';
import {Router} from '@angular/router';


@Component({
  selector: 'cyn-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() books: Array<Book>;
  @Output() selectedBookEvent: EventEmitter<Book> = new EventEmitter();
  @Output() deleteBookEvent: EventEmitter<{ id }> = new EventEmitter();

  constructor(private route: Router) {
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

  onBookRemove(id) {
    this.deleteBookEvent.emit({ id });
  }

  onBookDetails(id) {
    this.route.navigate(['/books/details', id]);
  }

  onBookEdit(id) {
    this.route.navigate(['/books/edit', id]);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
