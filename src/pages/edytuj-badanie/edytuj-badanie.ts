import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BadaniaService } from "../../services/badania";

@Component({
  selector: 'page-edytuj-badanie',
  templateUrl: 'edytuj-badanie.html',
})

export class EdytujBadaniePage implements OnInit {
  mode = 'New';
  badanieForm : FormGroup;
  constructor(private navParams: NavParams, private badaniaService: BadaniaService, private navCtrl: NavController) {}

  ngOnInit() {
    this.mode = this.navParams.get('mode');
    this.initializeForm();
  }

  onSubmit() {
    const value = this.badanieForm.value;
    this.badaniaService.dodajBadanie(value.name, value.erytrocyty, value.hemoglobina, value.hematokryt, value.mcv, value.mch, value.mchc, value.leukocyty, value.limfocyty, value.monocyty, value.trombocyty);
    this.badanieForm.reset();
    this.navCtrl.popToRoot();
  }

  private initializeForm() {

    this.badanieForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'erytrocyty': new FormControl(null, Validators.required),
      'hemoglobina': new FormControl(null, Validators.required),
      'hematokryt': new FormControl(null, Validators.required),
      'mcv': new FormControl(null, Validators.required),
      'mch': new FormControl(null, Validators.required),
      'mchc': new FormControl(null, Validators.required),
      'leukocyty': new FormControl(null, Validators.required),
      'limfocyty': new FormControl(null, Validators.required),
      'monocyty': new FormControl(null, Validators.required),
      'trombocyty': new FormControl(null, Validators.required)
    });
  }
}
