import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPageOptionsPage } from './main-page-options';

@NgModule({
  declarations: [
    MainPageOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPageOptionsPage),
  ],
})
export class MainPageOptionsPageModule {}
