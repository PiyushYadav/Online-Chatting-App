
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { ChatPageOptionsPage } from '../chat-page-options/chat-page-options';
import { UserInfoPage } from '../user-info/user-info';

import { IoDataProvider } from '../../providers/io-data/io-data';


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  Person;
  i;
  Date=new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public ioDataService:IoDataProvider) {
    this.i=this.navParams.data;
    this.Person=this.ioDataService.getData()[this.i];
  }

  ionViewDidLoad() {
   
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(ChatPageOptionsPage,{},{ cssClass: 'popovers'});
    popover.present({
      ev: myEvent
   	});


  }

  gotoUserInfo(){
    this.navCtrl.push(UserInfoPage);
  }

}
