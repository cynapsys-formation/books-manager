import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'cyn-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
@Input() book:Book;
@Input() index:number;
@Output() selectedBookEvent: EventEmitter<Book>=new EventEmitter();
constructor() { }

  ngOnInit() {
    
  }

  onBookSelect(book){
    this.selectedBookEvent.emit(book);
  }
}
