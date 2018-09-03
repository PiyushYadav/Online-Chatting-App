import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { ChatInfoPage } from '../chat-info/chat-info';


/**
 * Generated class for the ChatPageOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-page-options',
  templateUrl: 'chat-page-options.html',
})
export class ChatPageOptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPageOptionsPage');
  }

  gotoChatInfo(){
  	this.navCtrl.push(ChatInfoPage);
  	this.viewCtrl.dismiss();
  }

}
