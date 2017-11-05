import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {  FiltrosPage } from '../pages/filtros/filtros';
import { QuestaoPage } from '../pages/questao/questao';

import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
//import { AngularFireAuth } from 'angularfire2/auth';
import { GabaritoProvider } from '../providers/gabarito/gabarito.service';


var config = {
  apiKey: "AIzaSyDrPAqs2r-CFEAFlOe-nC2EcgnxgbWYJUo",
  authDomain: "bepid-studies.firebaseapp.com",
  databaseURL: "https://bepid-studies.firebaseio.com",
  projectId: "bepid-studies",
  storageBucket: "bepid-studies.appspot.com",
  messagingSenderId: "729435687533"
};




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestaoPage,
    FiltrosPage,
  ],
  imports: [
    BrowserModule,
   AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, QuestaoPage, FiltrosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GabaritoProvider
  ]
})
export class AppModule {}
