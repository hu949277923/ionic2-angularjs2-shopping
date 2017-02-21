import { Component/*, Input*/ } from '@angular/core';
// import { NavController } from 'ionic-angular';

@Component({
  selector: 'cm-plus-minus',
  templateUrl: 'plus-minus.html'
})
export class PlusMinusComponent{
 // @Input()
  values: number = 0;
  minVal: number = 0;
  maxVal: number = 99;
 isPwd: true
  constructor( /*public navCtrl: NavController*/ ) {
    //console.log(TabsPage);
  }
  onlyInputNumber(value:any) {
    this.values = Math.abs(parseInt(value.replace(/^((-\d+) (0+))$/,''), 10));
    if(this.values <= this.minVal) {
      this.values = this.minVal;
    }
    if ( this.values >= this.maxVal) {
      this.values = this.maxVal;
    }
  }
  minus() {
    if (isNaN(this.values)) {
      this.values = 0;
    }
    this.values--;
    if (this.values <= this.minVal) {
      this.values = this.minVal;
    }
  }
  plus() {
    if (isNaN(this.values)) {
      this.values = 0;
    }
    this.values++;
    if ( this.values >= this.maxVal) {
      this.values = this.maxVal;
    }
  }
}
