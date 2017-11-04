import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltrosPage } from './filtros';

@NgModule({
  declarations: [
    FiltrosPage,
  ],
  imports: [
    IonicPageModule.forChild(FiltrosPage),
  ],
})
export class FiltrosPageModule {}
