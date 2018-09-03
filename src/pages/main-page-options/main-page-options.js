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
import { ViewController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { PreLoginPage } from '../pre-login/pre-login';
/**
 * Generated class for the MainPageOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPageOptionsPage = /** @class */ (function () {
    function MainPageOptionsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    MainPageOptionsPage.prototype.ionViewDidLoad = function () {
    };
    MainPageOptionsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    MainPageOptionsPage.prototype.gotoSettings = function () {
        this.navCtrl.push(SettingsPage);
        this.viewCtrl.dismiss();
    };
    MainPageOptionsPage.prototype.gotoPreLogin = function () {
        this.viewCtrl.dismiss();
        this.navCtrl.setRoot(PreLoginPage);
    };
    MainPageOptionsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-main-page-options',
            templateUrl: 'main-page-options.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController])
    ], MainPageOptionsPage);
    return MainPageOptionsPage;
}());
export { MainPageOptionsPage };
//# sourceMappingURL=main-page-options.js.map