import { Component } from '@angular/core';

@Component({
  selector: 'cyn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  total: any;

  constructor() {
    console.log('AppComponent', this.calculator(1, 4));

    this.total = 5;
  }

  load(): void {
    const x = function(a: number) {
      return a + 4;
    };

    const y = (a: number) => a + 4;
    const z: number = y(5);
  }

  calculator(a: number, b = 0): number {
     return a * b;
  }
}
