import { Component } from '@angular/core';
import { NavController, PopoverController, LoadingController, AlertController } from 'ionic-angular';
import { EdytujBadaniePage } from "../edytuj-badanie/edytuj-badanie";
import { Badanie } from "../../models/badanie";
import { BadaniaService } from "../../services/badania";
import { BadaniePage } from "../badanie/badanie";
import { bOptionsPage } from "./b-options/b-options";
import { AuthService } from "../../services/auth";

@Component({
  selector: 'page-badania',
  templateUrl: 'badania.html',
})
export class BadaniaPage {

  badania: Badanie[];

  constructor(private navCtrl: NavController, private badaniaService: BadaniaService, private popoverCtrl: PopoverController, private authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {}

  ionViewWillEnter() {
    this.badania = this.badaniaService.getBadania();
  }

  onLoadBadanie(badanie: Badanie, index: number) {
  this.navCtrl.push(BadaniePage, {badanie: badanie, index: index});
  }

  onNoweBadanie() {
    this.navCtrl.push(EdytujBadaniePage, {
      mode: 'Nowe'
    });
  }

  onShowOptions(event: MouseEvent) {
    const loading = this.loadingCtrl.create({
      content: 'Proszę czekać..'
    });
    const popover = this.popoverCtrl.create(bOptionsPage);
    popover.present({ev: event});
    popover.onDidDismiss(
      data => {
        if (data.action == 'load') {
          loading.present();
          this.authService.getActiveUser().getToken()
          .then(
            (token: string) => {
              this.badaniaService.fetchList(token)
                .subscribe(
                  (list: Badanie[]) => {
                    loading.dismiss();
                    if (list) {
                      this.badania = list;
                    } else {
                      this.badania = [];
                    }
                  },
                  error => {
                    loading.dismiss();
                    this.handleError(error.json().error);
                  }
                );
            }
          );
        } else if (data.action == 'store') {
          loading.present();
          this.authService.getActiveUser().getToken()
            .then(
              (token: string) => {
                this.badaniaService.storeList(token)
                  .subscribe(
                    () => loading.dismiss(),
                    error => {
                      loading.dismiss();
                      this.handleError(error.json().error);
                    }
                  );
              }
            );
        }
      }
    );
  }

  private handleError(errorMessage: string) {
    const alert = this.alertCtrl.create({
      title: 'Wystąpił błąd',
      message: errorMessage,
      buttons: ['OK']
    });
    alert.present();
  }
}