import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditSettingsPage } from './edit-settings';

@NgModule({
  declarations: [
    EditSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditSettingsPage),
  ],
})
export class EditSettingsPageModule {}
