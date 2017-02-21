import { Component  } from '@angular/core';

@Component({
  selector: 'page-forget-pwd',
  templateUrl: 'forget-pwd.html'
})
export class ForgetPwdPage {
  HEADER:any;
  // isShowTab: number;
  constructor() {
    //console.log(this.params.get('id'));
    //console.log(TabsPage);
    this.HEADER= {
      isShowBack:true,
      title: '找回密码'
    }
    // this.isShowTab = 1;
  }

}
