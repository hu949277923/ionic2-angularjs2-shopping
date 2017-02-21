import { Component  } from '@angular/core';

@Component({
  selector: 'page-feed-back',
  templateUrl: 'feed-back.html'
})
export class FeedBackPage {
  HEADER:any;
  // isShowTab: number;
  constructor() {
    //console.log(this.params.get('id'));
    //console.log(TabsPage);
    this.HEADER= {
      isShowBack:true,
      title: '意见反馈'
    }
    // this.isShowTab = 1;
  }

}
