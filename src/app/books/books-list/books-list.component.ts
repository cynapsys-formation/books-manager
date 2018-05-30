import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { filter, mergeMap, count, take } from 'rxjs/operators';
import { Book } from '../book';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'cyn-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
 @Input() books:Array<Book>;
 @Output() selectedBookEvent: EventEmitter<Book>=new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
  onSelectedBookEvent(book){
    this.selectedBookEvent.emit(book);
  }
}
