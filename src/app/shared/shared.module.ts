import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FromNowPipe } from './pipes/from-now.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageComponent,
    NotificationComponent,
    FromNowPipe
  ],
  exports: [
    MessageComponent,
    FromNowPipe
  ]
})
export class SharedModule { }
