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
  arrayQuestoes = [];
  arrayGabarito = [];

  addQuestao(questao: Observable<any> ){
    this.arrayQuestoes.push(questao);
  }
  getQuestoes(){
    return this.arrayQuestoes[1];
  }

  addGabarito(resposta: string){
    this.arrayGabarito.push(resposta);
  }




}
