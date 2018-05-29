import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessageComponent, NotificationComponent],
  exports: [MessageComponent]
})
export class SharedModule { }
