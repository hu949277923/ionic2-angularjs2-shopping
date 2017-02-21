import { Component  } from '@angular/core';

@Component({
  selector: 'page-buyer-address-add',
  templateUrl: 'buyer-address-add.html'
})
export class BuyerAddressAddPage {
  HEADER:any;
  // isShowTab: number;
  constructor() {
    //console.log(this.params.get('id'));
    //console.log(TabsPage);
    this.HEADER= {
      isShowBack:true,
      title: '添加新地址'
    }
    // this.isShowTab = 1;
  }
}
