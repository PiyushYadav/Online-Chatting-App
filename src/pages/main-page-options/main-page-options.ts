import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { PreLoginPage } from '../pre-login/pre-login';

/**
 * Generated class for the MainPageOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-page-options',
  templateUrl: 'main-page-options.html',
})
export class MainPageOptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {

  }

  close() {
    this.viewCtrl.dismiss();
  }

  gotoSettings(){
  	this.navCtrl.push(SettingsPage);
  	this.viewCtrl.dismiss();
  }

  gotoPreLogin(){
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot(PreLoginPage);
  }

}
