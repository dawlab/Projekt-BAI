import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EdytujBadaniePage } from "../edytuj-badanie/edytuj-badanie";
import { Badanie } from "../../models/badanie";
import { BadaniaService } from "../../services/badania";
import { BadaniePage } from "../badanie/badanie";

@Component({
  selector: 'page-badania',
  templateUrl: 'badania.html',
})
export class BadaniaPage {

  badania: Badanie[];

  constructor(private navCtrl: NavController, private badaniaService: BadaniaService) {}

  ionViewWillEnter() {
    this.badania = this.badaniaService.getBadania();
  }

  onLoadBadanie(badanie: Badanie, index: number) {
  this.navCtrl.push(BadaniePage, {badanie: badanie, index: index});
  }

  onNoweBadanie() {
    this.navCtrl.push(EdytujBadaniePage, {
      mode: 'New'
    });

 }
}