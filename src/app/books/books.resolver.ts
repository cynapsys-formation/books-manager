import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Book} from './book';
import {Observable} from 'rxjs';
import {BooksService} from './books.service';

@Injectable()
export class BooksResolver implements Resolve<Book> {

  constructor(private booksService: BooksService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> | Promise<Book> | Book {
    const id = +route.paramMap.get('id');
    return this.booksService.fetchById(id);
  }
}
