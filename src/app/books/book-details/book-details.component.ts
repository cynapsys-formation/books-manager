import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'cyn-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;
  description: string;
  date1 = '2018-05-27';

  constructor() { }

  ngOnInit() {
    this.description = '<h1>Description</h1>';
  }

}
