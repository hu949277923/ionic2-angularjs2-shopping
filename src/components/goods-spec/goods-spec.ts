import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { GoodsSpecModalComponent } from '../goods-spec-modal/goods-spec-modal';

@Component({
  selector: 'cm-goods-spec',
  templateUrl: 'goods-spec.html'
})
export class GoodsSpecComponent  implements OnInit{

  // isShowTab: number;
  constructor( public modalCtrl: ModalController ) {
    //console.log(TabsPage);

    // this.isShowTab = 1;
  }
  ngOnInit(){
  }
  openSpecModal() {
    let myModal = this.modalCtrl.create(GoodsSpecModalComponent);
    myModal.present();
  }
}
