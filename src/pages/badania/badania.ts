import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EdytujBadaniePage } from "../edytuj-badanie/edytuj-badanie";
import { Badanie } from "../../models/badanie";
import { BadaniaService } from "../../services/badania";
import { BadaniePage } from "../badanie/badanie";


@IonicPage()
@Component({
  selector: 'page-badania',
  templateUrl: 'badania.html',
})
export class BadaniaPage {

  badania: Badanie[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private badaniaService: BadaniaService) {}

  ionViewWillEnter() {
    this.badania = this.badaniaService.getBadania();
  }

  onNoweBadanie() {
    this.navCtrl.push(EdytujBadaniePage, {
    mode: 'New'});
  }

  onLoadBadanie(badanie: Badanie, index: number) {
  this.navCtrl.push(BadaniePage, {badanie: badanie, index: index});
  }
}
