import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

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

  addQuestao(questao: string ){
    this.arrayQuestoes.push(questao);
  }

  addGabarito(resposta: string){
    this.arrayGabarito.push(resposta);
  }




}
