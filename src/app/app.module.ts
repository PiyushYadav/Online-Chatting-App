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
import { EditSettingsPage } from '../pages/edit-settings/edit-settings';

//
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
//





@NgModule({
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
    UserInfoPage,
    EditSettingsPage
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
    PreLoginPage,  // HomePage
    SignUpPage,
    MainPage,
    MainPageOptionsPage,
    ChatPage,
    SettingsPage,
    ChatPageOptionsPage,
    ChatInfoPage,
    UserInfoPage,
    EditSettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IoDataProvider
  ]
})
export class AppModule {}
