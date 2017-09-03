import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import  {NavParams, NavController } from "ionic-angular";
import { BadaniaService } from "../../services/badania";
import { Badanie } from "../../models/badanie";


@Component({
  selector: 'page-edytuj-badanie',
  templateUrl: 'edytuj-badanie.html'
})
export class EdytujBadaniePage implements OnInit {
  mode = 'Nowe';
  badanieForm: FormGroup;
  badanie: Badanie;
  index: number;

  constructor(private navParams: NavParams,
              private badaniaService: BadaniaService,
              private navCtrl: NavController) {
  }

  ngOnInit() {
    this.mode = this.navParams.get('mode');
    if (this.mode == 'Edytuj') {
      this.badanie = this.navParams.get('badanie');
      this.index = this.navParams.get('index');
    }
    this.initializeForm();
  }

  onSubmit() {

    const value = this.badanieForm.value;
    
    if (this.mode == 'Edytuj') {
      this.badaniaService.updateBadanie(this.index, value.name, value.erytrocyty, value.hemoglobina, value.hematokryt, value.mcv, value.mch, value.mchc, value.leukocyty, value.limfocyty, value.monocyty, value.trombocyty);
    } else {
      this.badaniaService.dodajBadanie(value.name, value.erytrocyty, value.hemoglobina, value.hematokryt, value.mcv, value.mch, value.mchc, value.leukocyty, value.limfocyty, value.monocyty, value.trombocyty);
    }
    this.badanieForm.reset();
    this.navCtrl.popToRoot();
  }

  private initializeForm() {
    let name = null;
    let erytrocyty = null;
    let hemoglobina = null;
    let hematokryt = null;
    let mcv = null;
    let mch = null;
    let mchc = null;
    let leukocyty = null;
    let limfocyty = null;
    let monocyty = null;
    let trombocyty = null;


    if (this.mode == 'Edytuj') {
      name = this.badanie.name;
      erytrocyty = this.badanie.erytrocyty;
      hemoglobina = this.badanie.hemoglobina;
      hematokryt = this.badanie.hematokryt;
      mcv = this.badanie.mcv;
      mch = this.badanie.mch;
      mchc = this.badanie.mchc;
      leukocyty = this.badanie.leukocyty;
      limfocyty = this.badanie.limfocyty;
      monocyty = this.badanie.monocyty;
      trombocyty = this.badanie.trombocyty;
    }

    this.badanieForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'erytrocyty': new FormControl(erytrocyty, Validators.required),
      'hemoglobina': new FormControl(hemoglobina, Validators.required),
      'hematokryt': new FormControl(hematokryt, Validators.required),
      'mcv': new FormControl(mcv, Validators.required),
      'mch': new FormControl(mch, Validators.required),
      'mchc': new FormControl(mchc, Validators.required),
      'leukocyty': new FormControl(leukocyty, Validators.required),
      'limfocyty': new FormControl(limfocyty, Validators.required),
      'monocyty': new FormControl(monocyty, Validators.required),
      'trombocyty': new FormControl(trombocyty, Validators.required),

    });
  }
}
