import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FiltrosPage} from '../filtros/filtros';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  filtros(){
    this.navCtrl.push(FiltrosPage);
  }

}
