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

  private arrayKeyQuestoes = [];
  private qtdeQuestoes: number;

  getQtdeQuestoes(){
    return this.qtdeQuestoes;
  }
  setQtdeQuestoes(n:number){
      this.qtdeQuestoes = n;
  }

  addArrayKeys(key: string){
    this.arrayKeyQuestoes.push(key);
  }
  getArrayKeys(){
    return this.arrayKeyQuestoes
  }




}
