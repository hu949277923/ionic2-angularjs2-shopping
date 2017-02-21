import { Component, ViewChild, OnInit } from '@angular/core';
import { Content, AlertController,  ModalController } from 'ionic-angular';
import { GoodsSpecModalComponent } from '../../components/goods-spec-modal/goods-spec-modal';

@Component({
  selector: 'page-goods-detail',
  templateUrl: 'goods-detail.html'
})
export class GoodsDetailPage  implements OnInit{

  @ViewChild(Content) content: Content;
  HEADER:any;
  pet: string = "商品介绍";
  // isShowTab: number;
  constructor( private alertCtrl: AlertController,
               public modalCtrl: ModalController) {
    //console.log(TabsPage);

    // this.isShowTab = 1;
  }
  ngOnInit(){
    this.HEADER= {
      isShowBack:true,
      title: '商品详情'
    }
  }
  // 选择规格
  openSpecModal() {
    let myModal = this.modalCtrl.create(GoodsSpecModalComponent);
    myModal.present();
  }
  //联系卖家
  openCallSeller() {
    let alert = this.alertCtrl.create({
      title: '0432-7689546',
      buttons: [{
        text: '取消',
        role: 'cancel',
        cssClass:'dialogBtnCls',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: '呼叫',
        cssClass:'dialogBtnCls',
        handler: () => {
          location.href='tel:10086';
        }
      }]
    });
    alert.present();
  }
}
