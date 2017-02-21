/**
 * Created by admin on 2016/11/17.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'page-buy-home',
  templateUrl: 'buy-home.html'
})
export class BuyHomePage {
  HEADER:any;
  pet: string = "";
  // isShowTab: number;
  constructor() {
    //console.log(this.params.get('id'));
    //console.log(TabsPage);
    this.HEADER= {
      isShowBack:true,
      title: ''
    }
    // this.isShowTab = 1;
  }

}
