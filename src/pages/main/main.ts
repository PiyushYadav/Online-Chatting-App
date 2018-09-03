import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
// import { ToastController } from 'ionic-angular';

import { MainPageOptionsPage } from '../main-page-options/main-page-options';
import { ChatPage } from '../chat/chat';

import { UserInfoPage } from '../user-info/user-info';

import { AngularFireAuth } from 'angularfire2/auth';


import { IoDataProvider } from '../../providers/io-data/io-data';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  People;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    // private toastCtrl: ToastController,
    public ioDataService: IoDataProvider,
    private afAuth: AngularFireAuth
   ) {
    



    this.People=this.ioDataService.getData();//this.getUserData();

    // console.log(this.People);
    // console.log(this.People.uid+"  "+this.People.email);
    // ///////////////Toast/////////////////
    // let toast = this.toastCtrl.create({
    //   message: 'Logged In!',
    //   duration: 3000,
    //   position: 'bottom'
    // });

    // toast.onDidDismiss(() => {
    //   // console.log('Dismissed toast');
    // });

    // toast.present();
    ///////////////////////////////////////

  }

  AppName='Hey';
  Variable='Chats';


  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MainPageOptionsPage,{},{ cssClass: 'popovers'});
    popover.present({
      ev: myEvent
   	});
  }

  showAll(){
    this.Variable='All';
  }

  gotoChat(i){
    this.People[i].notSeen=0;
  	this.navCtrl.push(ChatPage,i);
  }

  showInfo(i){
    this.navCtrl.push(UserInfoPage,i);
  }

  getAuthenticatedUser(){
    //this.ioDataService.getData();
  }

  // getUserData(){
  //   let a = this.afAuth.authState;
  //   a.subscribe((data:any)=>{
  //   })
  //   return a;
  // }
    //Some Useful methods for future
    // ionViewDidLoad() {
      
    // }

    // ionViewCanEnter(): boolean{
    //    // here we can either return true or false
    //    // depending on if we want to leave this view
    //    if(true){  //condition for login
    //       return true;
    //     }
    // }

  //Get from DB
}
