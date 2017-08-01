import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BadaniePage } from './badanie';

@NgModule({
  declarations: [
    BadaniePage,
  ],
  imports: [
    IonicPageModule.forChild(BadaniePage),
  ],
})
export class BadaniePageModule {}
