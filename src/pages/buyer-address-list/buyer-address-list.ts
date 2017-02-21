import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController/*, Refresher, InfiniteScroll, NavController, NavParams */} from 'ionic-angular';

// import { GoodsDetailPage } from '../../pages/goods-detail/goods-detail'

// import { GoodsList } from '../../service/goods/goods-list';
// import { GoodsListService } from '../../service/goods/goods-list.service';

@Component({
  selector: 'page-buyer-address-list',
  templateUrl: 'buyer-address-list.html'/*,
  providers:[GoodsListService]*/
})
export class BuyAddressListPage implements OnInit{
  // list: GoodsList[];
  //isPriceAsc: boolean = false;
  HEADER: any;
  //pushPage:any;
  constructor( /*public navCtrl: NavController,
               public params:NavParams,*/
               public router:Router,
               public alertCtrl:AlertController/*
               private goodsListService: GoodsListService*/ ) {

    //this.pushPage = GoodsDetailPage;
  }
  ngOnInit() {
    //this.getGoodsList()
    this.HEADER= {
      isShowBack:true,
      title: '地址管理'
    }
  }
  // 删除收货地址
  delAddress() {
    let alert = this.alertCtrl.create({
      title: '确定要删除该地址吗？',
      buttons: [{
        text: '取消',
        role: 'cancel',
        cssClass:'dialogBtnCls',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
        {
          text: '确定',
          cssClass:'dialogBtnCls',
          handler: () => {
          }
        }]
    });
    alert.present();
  }
}
