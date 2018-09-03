import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignUpPage } from '../sign-up/sign-up';
import { MainPage } from '../main/main';

import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-pre-login',
  templateUrl: 'pre-login.html',
})
export class PreLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private ngFireAuth:AngularFireAuth) {

  }

  ionViewDidLoad() {

  }

  oldUser={
    emailId:'',
    password:''
  }

  gotoSignupPage(){
  	this.navCtrl.push(SignUpPage);
  }

  async gotoMainPage(){
    const result= await this.ngFireAuth.auth.signInWithEmailAndPassword(this.oldUser.emailId,this.oldUser.password);
  	  if(result){
        this.navCtrl.setRoot(MainPage);
      }
  }

}
