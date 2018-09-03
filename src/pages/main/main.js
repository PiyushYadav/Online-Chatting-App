var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { MainPageOptionsPage } from '../main-page-options/main-page-options';
import { ChatPage } from '../chat/chat';
import { UserInfoPage } from '../user-info/user-info';
import { IoDataProvider } from '../../providers/io-data/io-data';
import { AngularFireAuth } from 'angularfire2/auth';
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams, popoverCtrl, toastCtrl, ioDataService, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.ioDataService = ioDataService;
        this.afAuth = afAuth;
        this.AppName = 'Hey';
        this.Username = this.ioDataService.getUserName();
        this.Variable = 'Chats';
        this.People = this.ioDataService.getData();
        this.getAuthenticatedUser();
        // ///////////////Toast/////////////////
        var toast = this.toastCtrl.create({
            message: 'Logged In!',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
        ///////////////////////////////////////
    }
    MainPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(MainPageOptionsPage, {}, { cssClass: 'popovers' });
        popover.present({
            ev: myEvent
        });
    };
    MainPage.prototype.showAll = function () {
        this.Variable = 'All';
    };
    MainPage.prototype.gotoChat = function (i) {
        this.People[i].notSeen = 0;
        this.navCtrl.push(ChatPage, i);
    };
    MainPage.prototype.showInfo = function (i) {
        this.navCtrl.push(UserInfoPage, i);
    };
    MainPage.prototype.getAuthenticatedUser = function () {
        var a = this.afAuth.authState;
        a.subscribe(function (data) {
            console.log(data);
            console.log(data.uid + "  " + data.email);
        });
    };
    MainPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-main',
            templateUrl: 'main.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            PopoverController,
            ToastController,
            IoDataProvider,
            AngularFireAuth])
    ], MainPage);
    return MainPage;
}());
export { MainPage };
//# sourceMappingURL=main.js.map