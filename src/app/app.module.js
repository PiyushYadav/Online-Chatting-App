var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { PreLoginPage } from '../pages/pre-login/pre-login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { MainPage } from '../pages/main/main';
import { MainPageOptionsPage } from '../pages/main-page-options/main-page-options';
import { ChatPage } from '../pages/chat/chat';
import { SettingsPage } from '../pages/settings/settings';
import { ChatPageOptionsPage } from '../pages/chat-page-options/chat-page-options';
import { ChatInfoPage } from '../pages/chat-info/chat-info';
import { UserInfoPage } from '../pages/user-info/user-info';
import { IoDataProvider } from '../providers/io-data/io-data';
//
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
//
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                // HomePage,
                PreLoginPage,
                SignUpPage,
                MainPage,
                MainPageOptionsPage,
                ChatPage,
                SettingsPage,
                ChatPageOptionsPage,
                ChatInfoPage,
                UserInfoPage
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp),
                AngularFireDatabaseModule,
                AngularFireModule.initializeApp(FIREBASE_CONFIG),
                AngularFireAuthModule
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                PreLoginPage,
                SignUpPage,
                MainPage,
                MainPageOptionsPage,
                ChatPage,
                SettingsPage,
                ChatPageOptionsPage,
                ChatInfoPage,
                UserInfoPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                IoDataProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map