import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
=======
import { EdytujBadaniePage } from "../edytuj-badanie/edytuj-badanie";
>>>>>>> Dodanie elementow models i service, dodanie informacji o normach badan

/**
 * Generated class for the BadaniaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-badania',
  templateUrl: 'badania.html',
})
export class BadaniaPage {

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BadaniaPage');
  }

=======
  constructor(private navCtrl: NavController) {

  }

  onNoweBadanie() {
    this.navCtrl.push(EdytujBadaniePage, {
      mode: 'New'
    });

 }

>>>>>>> Dodanie elementow models i service, dodanie informacji o normach badan
}
