import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Badanie } from "../../models/badanie";

@Component({
  selector: 'page-badanie',
  templateUrl: 'badanie.html',
})
export class BadaniePage implements OnInit {
  badanie: Badanie;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {
    this.badanie = this.navParams.get('badanie');
    this.index = this.navParams.get('index');
  }
  
}
