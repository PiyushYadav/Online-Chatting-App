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
import { ChatPageOptionsPage } from '../chat-page-options/chat-page-options';
import { UserInfoPage } from '../user-info/user-info';
import { IoDataProvider } from '../../providers/io-data/io-data';
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, popoverCtrl, ioDataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.ioDataService = ioDataService;
        this.Date = new Date();
        this.i = this.navParams.data;
        this.Person = this.ioDataService.getData()[this.i];
    }
    ChatPage.prototype.ionViewDidLoad = function () {
    };
    ChatPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(ChatPageOptionsPage, {}, { cssClass: 'popovers' });
        popover.present({
            ev: myEvent
        });
    };
    ChatPage.prototype.gotoUserInfo = function () {
        this.navCtrl.push(UserInfoPage);
    };
    ChatPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-chat',
            templateUrl: 'chat.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, PopoverController, IoDataProvider])
    ], ChatPage);
    return ChatPage;
}());
export { ChatPage };
//# sourceMappingURL=chat.js.map