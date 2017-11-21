import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GabaritoProvider } from '../../providers/gabarito/gabarito.service';
import * as Highcharts from 'highcharts';
import { App} from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public gabarito: GabaritoProvider,private app: App) {

    }

  ionViewDidLoad() {
    this.acertos = this.gabarito.getQtdeAcertos();
    this.total = this.gabarito.getArrayKeys().length;
    this.erros = this.total - this.acertos;
    this.iniciarChart(this.acertos, this.erros)
    console.log('ionViewDidLoad ResultadoPage');
  }

  acertos: number;
  total: number;
  erros: number;







  finalizar(){

    while(this.gabarito.getArrayKeys().length ){
        this.gabarito.getArrayKeys().pop();
    }
    this.gabarito.setQtdeAcertos(0)
    this.erros = 0;
     this.app.getRootNav().setRoot(HomePage)
  }


    iniciarChart(acertos, erros ){



    var myChart =  Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Porcentagem de Desempenho'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'Black'
                }
            }
        }
    },
    series: [{
        name: 'Porcentagem',
        colorByPoint: true,
        data: [{
            name: 'Acertos',
            y: acertos
        }, {
            name: 'Erros',
            y: erros,
        }]
    }]
  });
}










}
