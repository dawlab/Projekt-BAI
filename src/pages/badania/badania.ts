import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
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

  constructor(private navCtrl: NavController, private badaniaService: BadaniaService, private popoverCtrl: PopoverController, private authService: AuthService) {}

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
    const popover = this.popoverCtrl.create(bOptionsPage);
    popover.present({ev: event});
    popover.onDidDismiss(
      data => {
        if (data.action == 'load') {
          this.authService.getActiveUser().getToken()
          .then(
            (token: string) => {
              this.badaniaService.fetchList(token)
                .subscribe(
                  (list: Badanie[]) => {
                    if (list) {
                      this.badania = list;
                    } else {
                      this.badania = [];
                    }
                  },
                  error => {
                    console.log(error);
                  }
                );
            }
          );
        } else {
          this.authService.getActiveUser().getToken()
            .then(
              (token: string) => {
                this.badaniaService.storeList(token)
                  .subscribe(
                    () => console.log('Success!'),
                    error => {
                      console.log(error);
                    }
                  );
              }
            );
        }
      }
    );
  }

}