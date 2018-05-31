import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../books.service';
import {Book} from '../book';

@Component({
  selector: 'cyn-books-details-page',
  templateUrl: './books-details-page.component.html',
  styleUrls: ['./books-details-page.component.css']
})
export class BooksDetailsPageComponent implements OnInit {
  book: Book;

  constructor(private activatedRoute: ActivatedRoute,
              private booksService: BooksService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.fetchById(+params['id']));
  }

  fetchById(id: number) {
    this.booksService.fetchById(id).subscribe(data => {
      this.book = data;
    });
  }
}
