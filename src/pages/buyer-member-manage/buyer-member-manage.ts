import { Component  } from '@angular/core';

@Component({
  selector: 'page-buyer-member-manage',
  templateUrl: 'buyer-member-manage.html'
})
export class BuyerMemberManagePage {
  HEADER:any;
  // isShowTab: number;
  constructor() {
    //console.log(this.params.get('id'));
    //console.log(TabsPage);
    this.HEADER= {
      isShowBack:true,
      title: '账户管理'
    }
    // this.isShowTab = 1;
  }

}
