import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'cyn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Books Manager';
  private total: any;


  constructor(private translate: TranslateService) {
    console.log('AppComponent', this.calculator(1, 4));
    this.total = 5;

    translate.setDefaultLang('en');
    translate.use('fr');
  }

  changeLanguage(lng) {
    this.translate.use(lng);
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
