import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController/*, Refresher, InfiniteScroll, NavController, NavParams */} from 'ionic-angular';

// import { GoodsDetailPage } from '../../pages/goods-detail/goods-detail'

// import { GoodsList } from '../../service/goods/goods-list';
// import { GoodsListService } from '../../service/goods/goods-list.service';

@Component({
  selector: 'page-buyer-order-detail',
  templateUrl: 'buyer-order-detail.html'/*,
  providers:[GoodsListService]*/
})
export class BuyOrderDetailPage implements OnInit{
  // list: GoodsList[];
  isPriceAsc: boolean = false;
  HEADER: any;
  //pushPage:any;
  constructor( /*public navCtrl: NavController,
               public params:NavParams,*/
               public router:Router,
               public alertCtrl:AlertController/*,
               private goodsListService: GoodsListService*/ ) {

    //this.pushPage = GoodsDetailPage;
  }
  ngOnInit() {
    //this.getGoodsList()
    this.HEADER= {
      isShowBack:true,
      title: '我的订单'
    }
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
