import { Component, OnInit/*, AfterViewInit, ViewChild*/ } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'cm-goods-spec-modal',
  templateUrl: 'goods-spec-modal.html'
})
export class GoodsSpecModalComponent implements OnInit/*, AfterViewInit*/{
  // @ViewChild('spec-list')
  // isShowTab: number;
  constructor( public router:Router,
               public viewCtrl:ViewController) {
    //console.log(TabsPage);

    // this.isShowTab = 1;
  }
  ngOnInit() {
    //this.setWidth();
  }/*
  setWidth() {

  }*/
  // 关闭弹窗
  closeSpecModal(){
    this.viewCtrl.dismiss();
  }
  // 跳转至确认订单页面
  openOrderConfirm() {
    this.viewCtrl.dismiss();
    this.router.navigate(['/orderConfirm']);
  }
}
