import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the GabaritoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GabaritoProvider {

  constructor() {

  }

  arrayKeyQuestoes = [];
  arrayGabarito = [];

  addGabarito(resposta: string){
    this.arrayGabarito.push(resposta);
  }

  addKeyQuestoes(key: string ){
    this.arrayKeyQuestoes.push(key);
    console.log(key)
  }



}
