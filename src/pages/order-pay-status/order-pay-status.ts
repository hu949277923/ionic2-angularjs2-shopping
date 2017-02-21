import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'page-order-pay-status',
  templateUrl: 'order-pay-status.html'
})
export class OrderPayStatusPage implements OnInit{
  HEADER: any;
  constructor( public router:Router) {

    //console.log(TabsPage);
  }
  ngOnInit() {
    this.HEADER= {
      isShowBack:false,
      title: '付款成功'
    }
  }
  openBuyOrderList() {
    this.router.navigate(['buyerOrderList']);
  }
}
