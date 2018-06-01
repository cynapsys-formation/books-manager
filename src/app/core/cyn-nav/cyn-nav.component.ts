import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import {SharedService} from '../../shared/services/shared.service';

@Component({
  selector: 'cyn-nav',
  templateUrl: './cyn-nav.component.html',
  styleUrls: ['./cyn-nav.component.css']
})
export class CynNavComponent {
  message: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver,
              private sharedService: SharedService) {

    this.sharedService.getMessage().subscribe(data => this.message = data);

   }

  addMessage(message) {
    this.sharedService.addMessage(message);
  }
}
