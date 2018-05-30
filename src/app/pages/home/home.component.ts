import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'cyn-home',
  templateUrl: './home.component.html',
  /*
  template: `
    <p>
      home nnn works!
    </p>

  `,
  */
  styleUrls: ['./home.component.css'],
 // changeDetection: ChangeDetectionStrategy.Default,
 // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
