import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    FormsModule
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
