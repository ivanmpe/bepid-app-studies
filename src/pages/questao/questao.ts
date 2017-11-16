import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { GabaritoProvider } from '../../providers/gabarito/gabarito.service';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the QuestaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questao',
  templateUrl: 'questao.html',
})
export class QuestaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public database : AngularFireDatabase, public gabarito: GabaritoProvider) {

        var refItem = database.list("/questoes" );
            refItem.snapshotChanges([])
              .subscribe( filhos => {
                filhos.forEach( filho => {


                  if(filho.key == '2'){
                    this.enunciado = filho.payload.val().enunciado;
                    this.a = filho.payload.val().a;
                    this.b = filho.payload.val().b;
                    this.c = filho.payload.val().c;
                    this.d = filho.payload.val().d;
                    this.e = filho.payload.val().e;
                    this.respostaCorreta = filho.payload.val().resposta;
                    console.log(filho.key);

                  }
                  //}
                });
              });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestaoPage');
  }


  enunciado: string;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  respostaCorreta: string;



}
