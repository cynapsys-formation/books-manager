import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [
    MessageComponent,
    NotificationComponent,
    FromNowPipe,
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    MessageComponent,
    FromNowPipe,
  ]
})
export class SharedModule { }
