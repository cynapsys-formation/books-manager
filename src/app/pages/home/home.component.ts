import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../../shared/services/shared.service';

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
  message: string;

  constructor(private router: Router,
              private sharedService: SharedService) {

    this.sharedService.getMessage().subscribe(data => this.message = data);

  }

  ngOnInit() {
  }

  goToPage(page) {
    this.router.navigate([page]);
  }

  addMessage(message) {
    // this.message = message;
    this.sharedService.addMessage(message);
  }

}
