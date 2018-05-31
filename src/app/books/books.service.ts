import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Book} from './book';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';

@Injectable()
export class BooksService {

  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = environment.urlApi;
  }

  fetchAll(): Observable<Array<Book>> {
    return this.http.get(`${this.urlApi}/books`) as Observable<Array<Book>>; // this.urlApi + '/books'
  }

  add(model: Book) {
    return this.http.post(`${this.urlApi}/books`, model);
  }

  edit(id: number, model: Book) {
    return this.http.put(`${this.urlApi}/books/${id}`, model);
  }

  remove(id: number) {
    return this.http.delete(`${this.urlApi}/books/${id}`);
  }

  fetchById(id: number) {
    return this.http.get(`${this.urlApi}/books/${id}`);
  }

  save(model: Book, id?: number) {
    return id ? this.http.put(`${this.urlApi}/books/${id}`, model) : this.http.post(`${this.urlApi}/books`, model);
  }

  loadDataPromise(): Promise<Array<Book>> {
    return Promise.resolve(this.loadDataStatic());
  }

  loadDataStatic(): Array<Book> {
    return [
      {id: 1, title: 'Bookjjjjj 1', year: 2016},
      {id: 232, title: 'Book 2', year: 2017},
      {id: 33, title: 'Book 3', year: 2018},
      {id: 43, title: 'Book 4', year: 2015},
      {id: 534, title: 'Book 5', year: 2014}
    ];
  }

  loadDataObs(): Observable<Array<Book>> {
    return of(this.loadDataStatic());
  }

  /*
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
  */

}
