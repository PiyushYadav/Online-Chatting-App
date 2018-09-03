import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';

@IonicPage()
@Component({
  selector: 'page-edit-settings',
  templateUrl: 'edit-settings.html',
})
export class EditSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditSettingsPage');
  }

  saveAndGotoMainPage(){
  	//save data
  	this.navCtrl.setRoot(MainPage);
  }

  gotoMainPage(){
  	this.navCtrl.setRoot(MainPage);
  }

}
