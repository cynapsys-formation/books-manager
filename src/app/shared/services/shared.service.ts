import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  message$: ReplaySubject<string> = new ReplaySubject();
  // Subject, ReplaySubject, BehaviourSubject, RXJS

  constructor() { }

  addMessage(message: string) {
    this.message$.next(message);
  }

  getMessage(): Observable<string> {
    return this.message$.asObservable();
  }


}
