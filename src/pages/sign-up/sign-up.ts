import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MainPage } from '../main/main';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Users } from '../../models/Users/Users.interface';


@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {


  newUser = {} as Users;

  dbRef : AngularFireList<Users>
  db;
  pass;
  vpass;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ngFireAuth: AngularFireAuth, private fireDb: AngularFireDatabase) {

    //console.log(this.fireDb);
    this.db = this.fireDb.database.ref('users');
  }

  ionViewDidLoad() {

  }

  async gotoMainPage(){

    setTimeout(()=>{
      // this.newUser.id=x;
      if (this.pass===this.vpass && this.pass!=null && this.newUser.firstName!=null && this.newUser.lastName!=null && this.newUser.email!=null) {
        if(this.adduser(this.newUser)){
          this.navCtrl.setRoot(MainPage);
        }
      }
    },0);

  }

  adduser(newuser) {
      var promise = new Promise((resolve, reject) => {
        this.ngFireAuth.auth.createUserWithEmailAndPassword(newuser.email, this.pass).then(() => {
          this.ngFireAuth.auth.currentUser.updateProfile({
            displayName: newuser.firstName,
            photoURL: ''
          }).then(() => {
            this.db.child(this.ngFireAuth.auth.currentUser.uid).set({
              firstName: newuser.firstName,
              lastName: newuser.lastName,
              uid: this.ngFireAuth.auth.currentUser.uid,
              displayName: newuser.firstName,
              photoURL: ''
            }).then(() => {
              resolve({ success: true });
              }).catch((err) => {
                reject(err);
            })
            }).catch((err) => {
              reject(err);
          })
        }).catch((err) => {
          reject(err);
        })
      })
      return promise;
    }

}
