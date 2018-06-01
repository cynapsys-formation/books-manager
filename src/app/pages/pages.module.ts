import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {SharedModule} from '../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    TranslateModule.forChild({})
  ],
  declarations: [HomeComponent, AboutComponent]
})
export class PagesModule { }
