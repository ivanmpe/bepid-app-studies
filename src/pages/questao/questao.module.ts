import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestaoPage } from './questao';

@NgModule({
  declarations: [
    QuestaoPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestaoPage),
  ],
})
export class QuestaoPageModule {}
