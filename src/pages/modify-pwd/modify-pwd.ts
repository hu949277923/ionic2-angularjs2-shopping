import { Component  } from '@angular/core';

@Component({
  selector: 'page-modify-pwd',
  templateUrl: 'modify-pwd.html'
})
export class ModifyPwdPage {
  HEADER:any;
  // isShowTab: number;
  constructor() {
    //console.log(this.params.get('id'));
    //console.log(TabsPage);
    this.HEADER= {
      isShowBack:true,
      title: '修改密码'
    }
    // this.isShowTab = 1;
  }

}
