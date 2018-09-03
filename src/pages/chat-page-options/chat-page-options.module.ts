import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPageOptionsPage } from './chat-page-options';

@NgModule({
  declarations: [
    ChatPageOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPageOptionsPage),
  ],
})
export class ChatPageOptionsPageModule {}
