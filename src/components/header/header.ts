import { Component, Input } from '@angular/core';
// import { NavController } from 'ionic-angular';

@Component({
  selector: 'cm-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  @Input()
  HEADER: any;
  constructor( /*public navCtrl: NavController*/ ) {
    //console.log(TabsPage);
  }
  back() {
    history.back();
  }
}
