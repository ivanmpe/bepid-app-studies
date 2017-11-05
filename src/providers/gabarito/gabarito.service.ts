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
    console.log('Hello GabaritoProvider Provider');
  }
  
  arrayGabarito = [];

  addGabarito(questao: string){
    this.arrayGabarito.push(questao);
  }

  removeGabarito( questao: string){
      this.arrayGabarito.splice(this.arrayGabarito.indexOf(questao));
  }






}
