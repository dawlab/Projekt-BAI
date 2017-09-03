import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Badanie } from "../../models/badanie";
import { BadaniaService } from "../../services/badania";
import { EdytujBadaniePage } from "../edytuj-badanie/edytuj-badanie";

@Component({
  selector: 'page-badanie',
  templateUrl: 'badanie.html',
})
export class BadaniePage implements OnInit {
  badanie: Badanie;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private badaniaService: BadaniaService) {}

  ngOnInit() {
    this.badanie = this.navParams.get('badanie');
    this.index = this.navParams.get('index');
  }

  onEditBadanie() {
    this.navCtrl.push(EdytujBadaniePage, {mode: 'Edytuj', badanie: this.badanie, index: this.index});
  }

  onDeleteBadanie() {
    this.badaniaService.usunBadanie(this.index);
    this.navCtrl.popToRoot();
  }
  
}
