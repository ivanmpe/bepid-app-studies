import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestaoPage} from '../questao/questao';
import { AngularFireDatabase } from 'angularfire2/database';
import { GabaritoProvider } from '../../providers/gabarito/gabarito.service';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the FiltrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filtros',
  templateUrl: 'filtros.html',
})
export class FiltrosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, database : AngularFireDatabase, public gabarito: GabaritoProvider) {
     this.questoes = database.list("questoes/").valueChanges();
     console.log('questao');
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltrosPage');
  }

  itemsRef: AngularFireList<any>;
  array = [];
  questoes: Observable<any>;
  logica: boolean;
  poo: boolean;
  estruturaDeDados: boolean;
  estruturada: boolean;
  swift: boolean;
  java: boolean;
  c: boolean;
  database: AngularFireDatabase;


   testeLogica() {
     if(this.logica){
          this.array.push("1")
          console.log('add ' + 1);
    } else {
        this.array.splice(this.array.indexOf("1"));
        console.log(this.array);
     }
   }



    testePoo() {
      if(this.poo){
           this.array.push("2")
           console.log('add ' + 2);
           console.log(this.array);

      } else {
         this.array.splice(this.array.indexOf("2"),1);
         console.log(this.array);
      }
  }

   testeEstruturada() {
     if(this.estruturada){
          this.array.push("3")
          console.log('add ' + 3);
          console.log(this.array);

    } else {
        this.array.splice(this.array.indexOf("3"),1);
        console.log(this.array);
     }
  }


   testeEstrutura() {
     if(this.estruturaDeDados){
          this.array.push("4")
          console.log('add ' + 4);
          console.log(this.array);

    } else {
        this.array.splice(this.array.indexOf("4"),1);
        console.log(this.array);
     }
   }

   testeJava() {
     if(this.java){
          this.array.push("5")
          console.log('add ' + 5);
          console.log(this.array);

    } else {
        this.array.splice(this.array.indexOf("5"),1);
        console.log(this.array);
     }
   }

   testeSwift() {
     if(this.swift){
          this.array.push("6")
          console.log('add ' + 6);
          console.log(this.array);

    } else {
        this.array.splice(this.array.indexOf("6"),1);
        console.log(this.array);
     }
   }

   testeC() {
     if(this.c){
          this.array.push("7")
          console.log(this.array);
          console.log('add ' + 7);
    } else {
        this.array.splice(this.array.indexOf("7"),1);
        console.log(this.array);
     }
   }


   geraGabarito(){
     var database: AngularFireDatabase;
     this.itemsRef = database.list('questoes/' + '2');
     this.itemsRef.snapshotChanges(['child_added'])
 .   subscribe(actions => {
   actions.forEach(action => {
     console.log(action.type);
     console.log(action.key);
     console.log(action.payload.val());
   });
 });

   }



    questao(){
        this.geraGabarito();
        this.navCtrl.push(QuestaoPage);
     }


}
