import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { GabaritoProvider } from '../../providers/gabarito/gabarito.service';
import { Observable } from 'rxjs/Observable';
import { App} from 'ionic-angular';
import { HomePage } from '../home/home';




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
     public database : AngularFireDatabase, public gabarito: GabaritoProvider,  private app: App) {
       this.totalQuestoes = this.gabarito.getArrayKeys().length;

       this.questao();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestaoPage');

  }



  questao(){
    var refItem = this.database.list("/questoes" );
        refItem.snapshotChanges([])
          .subscribe( filhos => {
            filhos.forEach( filho => {

              if(filho.key == this.gabarito.getArrayKeys()[this.index]){
                this.enunciado = filho.payload.val().enunciado;
                this.a = filho.payload.val().a;
                this.b = filho.payload.val().b;
                this.c = filho.payload.val().c;
                this.d = filho.payload.val().d;
                this.e = filho.payload.val().e;
                this.respostaCorreta = filho.payload.val().resposta;
                //console.log(filho.key);

              }
              //}
            });
          });
  }


  proximaQuestao(){
    if( this.numeroQuestao < this.totalQuestoes-1){
      this.index = this.index + 1;
      this.numeroQuestao = this.numeroQuestao + 1;
      //this.gabarito.getArrayKeys().pop();
      this.questao();
    }
  }

  anteriorQuestao(){
    if( this.numeroQuestao > 0){
      this.index= this.index - 1;
      this.numeroQuestao = this.numeroQuestao - 1;
      //this.gabarito.getArrayKeys().pop();
      this.questao();
    }
  }



  descartar(){

    while(this.gabarito.getArrayKeys().length ){
        this.gabarito.getArrayKeys().pop();
    }

     this.app.getRootNav().setRoot(HomePage)
  }


  totalQuestoes: number;
  index:number = 0;
  numeroQuestao: number = 1;
  enunciado: string;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  respostaCorreta: string;



}
