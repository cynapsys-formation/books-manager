import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
import {Book} from '../book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'cyn-books-save-page',
  templateUrl: './books-save-page.component.html',
  styleUrls: ['./books-save-page.component.css']
})
export class BooksSavePageComponent implements OnInit {
  book: Book = new Book();

  constructor(private activatedRoute: ActivatedRoute,
              private booksService: BooksService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.fetchById(+params['id']));
  }

  onSave(event) {
    if (event.id) {
      this.booksService.edit(event.id, event).subscribe();
    } else {
      this.booksService.add(event).subscribe();
    }
  }

  fetchById(id: number) {
    this.booksService.fetchById(id).subscribe(data => {
      this.book = data;
    });
  }

}
