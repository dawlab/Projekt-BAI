import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth";
import { LoadingController, AlertController } from "ionic-angular";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(private authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {}

  onSignin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Logowanie..'
    });
    loading.present();
    this.authService.signin(form.value.email, form.value.password)
    .then(data => {
      loading.dismiss();
    })
    .catch(error => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Błąd',
        message: error.message,
        buttons: ['ok']});
      alert.present();
    }); 
  }
}