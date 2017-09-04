import { Component } from '@angular/core';
import { BadaniaPage } from '../badania/badania';
import { LokalizujPage } from '../lokalizuj/lokalizuj';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  badaniaPage = BadaniaPage;
  lokalizujPage = LokalizujPage;

}
