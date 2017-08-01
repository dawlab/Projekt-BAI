import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BadaniaPage } from '../badania/badania';
import { LokalizujPage } from '../lokalizuj/lokalizuj';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  badaniaPage = BadaniaPage;
  lokalizujPage = LokalizujPage;

}
