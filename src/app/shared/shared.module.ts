import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
//Decorateur 
@NgModule({
  //Importer les dependance 
  imports: [
    CommonModule
  ],
  //Les composants du module
  declarations: [MessageComponent],
  //
  exports: [MessageComponent]
})
export class SharedModule { }
