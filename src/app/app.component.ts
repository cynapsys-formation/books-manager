import { Component } from '@angular/core';

@Component({
  selector: 'cyn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Books Manager';

  load() {
    const x = function(a: number) {
      return a + 4;
    };

    const y = (a: number) => a + 4;
    const z: number = y(5);
  }
}
