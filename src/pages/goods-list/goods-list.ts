import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Refresher, InfiniteScroll/*NavController, NavParams */} from 'ionic-angular';

// import { GoodsDetailPage } from '../../pages/goods-detail/goods-detail'

import { GoodsList } from '../../service/goods/goods-list';
import { GoodsListService } from '../../service/goods/goods-list.service';

@Component({
  selector: 'page-goods-list',
  templateUrl: 'goods-list.html',
  providers:[GoodsListService]
})
export class GoodsListPage implements OnInit{
  list: GoodsList[];
  isPriceAsc: boolean = false;
  HEADER: any;
  //pushPage:any;
  constructor( /*public navCtrl: NavController,
               public params:NavParams,*/
               public router:Router,
               private goodsListService: GoodsListService ) {

    //this.pushPage = GoodsDetailPage;
  }
  ngOnInit() {
    this.getGoodsList()
    this.HEADER= {
      isShowBack:true,
      title: '商品列表'
    }
  }
  // 获取商品列表
  getGoodsList(): void {
    this.goodsListService.getGoodsList().then(GOODSLIST => this.list = GOODSLIST.slice(0, 4));
  }
  // 上拉刷新
  doRefresh(refresher: Refresher) {
    // console.log('Begin async operation', refresher);
    this.goodsListService.getGoodsListSlowly().then((GOODSLIST) => {
      for(let i = 0; i < GOODSLIST.length; i++) {
        this.list.unshift(GOODSLIST[i]);
      }
      refresher.complete();
    });
  }
  // 无线滚动
  doInfinite(infiniteScroll: InfiniteScroll) {
    console.log('Begin async operation');
    this.goodsListService.getGoodsListSlowly().then((GOODSLIST) => {
      for(let i = 0; i < GOODSLIST.length; i++) {
        this.list.unshift(GOODSLIST[i]);
      }
      infiniteScroll.complete();
    });
  }
  // 价格排序
  sortPrice() {
    if (!this.isPriceAsc) {
      this.isPriceAsc = true;
      return;
    }else{
      this.isPriceAsc = false;
    }
  }
  openGoodsDetail(id:number) {
    this.router.navigate(['/goodsDetail', id]);
    //this.navCtrl.push(GoodsDetailPage, { 'id':id });
  }
  test(){
    console.log(1111)
  }
}
