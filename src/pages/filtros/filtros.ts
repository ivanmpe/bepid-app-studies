import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestaoPage} from '../questao/questao';
import { AngularFireDatabase } from 'angularfire2/database';
import { GabaritoProvider } from '../../providers/gabarito/gabarito.service';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public database : AngularFireDatabase, public gabarito: GabaritoProvider, public toastCtrl: ToastController) {
       this.questoes = database.list('questoes').valueChanges();

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltrosPage');
  }




  refItem = this.database.list('questoes')
  arrayFiltros = [];
  questoes: Observable<any>;
  logica: boolean;
  poo: boolean;
  estruturaDeDados: boolean;
  estruturada: boolean;
  swift: boolean;
  java: boolean;
  c: boolean;
  refBD: AngularFireDatabase;


  //Funcoes de Filtros
   testeLogica() {
     if(this.logica){
          this.arrayFiltros.push("1")
          console.log('add ' + 1);
    } else {
        this.arrayFiltros.splice(this.arrayFiltros.indexOf("1"),1);
        console.log(this.arrayFiltros);
     }
   }



    testePoo() {
      if(this.poo){
           this.arrayFiltros.push("2")
           console.log('add ' + 2);
      } else {
         this.arrayFiltros.splice(this.arrayFiltros.indexOf("2"),1);
         console.log(this.arrayFiltros);
      }
  }

   testeEstruturada() {
     if(this.estruturada){
          this.arrayFiltros.push("3")
          console.log('add ' + 3);
          console.log(this.arrayFiltros);

    } else {
        this.arrayFiltros.splice(this.arrayFiltros.indexOf("3"),1);
        console.log(this.arrayFiltros);
     }
  }


   testeEstrutura() {
     if(this.estruturaDeDados){
          this.arrayFiltros.push("4")
          console.log('add ' + 4);

    } else {
        this.arrayFiltros.splice(this.arrayFiltros.indexOf("4"),1);
        console.log(this.arrayFiltros);
     }
   }

   testeJava() {
     if(this.java){
          this.arrayFiltros.push("5")
          console.log('add ' + 5);
          console.log(this.arrayFiltros);

    } else {
        this.arrayFiltros.splice(this.arrayFiltros.indexOf("5"),1);
        console.log(this.arrayFiltros);
     }
   }

   testeSwift() {
     if(this.swift){
          this.arrayFiltros.push("6")
          console.log('add ' + 6);
          console.log(this.arrayFiltros);

    } else {
        this.arrayFiltros.splice(this.arrayFiltros.indexOf("6"),1);
        console.log(this.arrayFiltros);
     }
   }

   testeC() {
     if(this.c){
          this.arrayFiltros.push("7")
          console.log(this.arrayFiltros);
          console.log('add ' + 7);
    } else {
        this.arrayFiltros.splice(this.arrayFiltros.indexOf("7"),1);
        console.log(this.arrayFiltros);
     }
   }









//////////////////////////////////////////////////////////////////////////////

   presentToast( msg: string) {
        let toast = this.toastCtrl.create({
          message: msg,
          duration: 2000
        });
        toast.present();
      }












////////////////////////////////////////////////////////////////////////////////


   geraGabarito(){

     console.log(this.arrayFiltros.length + 'filtros' )

     var i: number;
      var refItem = this.database.list('questoes');
              refItem.snapshotChanges([])
                .subscribe( filhos => {
                  filhos.forEach( filho => {
                  //  if(filho.payload.val().tipo == 1 ){
                  for(i=0; i< this.arrayFiltros.length; i++){
                    if( this.arrayFiltros[i] == filho.payload.val().tipo){
                        this.gabarito.addArrayKeys(filho.key);
              //          console.log(filho.key);
                      }
                    }
                  });
                  console.log(this.gabarito.getArrayKeys().length + ' elementos')
                  this.navCtrl.push(QuestaoPage)
                });

    }

////////////////////////////////////////////////////////////////////////////////

    questao(){

        if(this.arrayFiltros.length != 0) {
            this.geraGabarito();
        } else{
          this.presentToast('Você precisa escolher pelo menos 1 dos filtros. ')
        }



     }


}
