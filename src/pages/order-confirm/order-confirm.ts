import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html'
})
export class OrderConfirmPage implements OnInit {
  HEADER: any;
  desc: string;
  constructor( public router: Router) {
    //console.log(TabsPage);
  }
  ngOnInit() {
    this.HEADER= {
      isShowBack:false,
      title: '确认订单'
    }
  }
  clearDesc() {
    this.desc = ''
  }
  // 跳转支付成功页
  goPay() {
    this.router.navigate(['/orderPayStatus']);
  }
  // 调整地址页
  openAddressList() {
    this.router.navigate(['/buyerAddressList']);
  }
}
