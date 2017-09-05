import { Component } from '@angular/core';
import { Location } from "../../models/location";
import { ToastController, LoadingController } from "ionic-angular";
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-lokalizuj',
  templateUrl: 'lokalizuj.html',
})
export class LokalizujPage {

  location: Location = {
    lat: 40.7624324,
    lng: -73.9759827
  };
  locationIsSet = false;

  constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController, private geolocation: Geolocation) {}

  onLocate() {
    const loader = this.loadingCtrl.create({
      content: 'Getting your Location...'
    });
    loader.present();
    this.geolocation.getCurrentPosition()
      .then(
        location => {
          loader.dismiss();
          this.location.lat = location.coords.latitude;
          this.location.lng = location.coords.longitude;
          this.locationIsSet = true;
        }
      )
      .catch(
        error => {
          loader.dismiss();
          const toast = this.toastCtrl.create({
            message: 'Could get location, please pick it manually!',
            duration: 2500
          });
          toast.present();
        }
      );
  }


}
