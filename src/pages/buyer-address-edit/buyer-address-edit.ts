import { Component  } from '@angular/core';

@Component({
  selector: 'page-buyer-address-edit',
  templateUrl: 'buyer-address-edit.html'
})
export class BuyerAddressEditPage {
  HEADER:any;
  // isShowTab: number;
  constructor() {
    //console.log(this.params.get('id'));
    //console.log(TabsPage);
    this.HEADER= {
      isShowBack:true,
      title: '编辑地址'
    }
    // this.isShowTab = 1;
  }
  back() {
    history.back();
  }

}
