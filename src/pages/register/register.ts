import { Component  } from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  HEADER:any;
  // isShowTab: number;
  constructor(private formBuilder: FormBuilder,) {
    //console.log(this.params.get('id'));
    //console.log(TabsPage);
    this.HEADER= {
      isShowBack:true,
      title: '注册'
    }
    // this.isShowTab = 1;
  }

  registerForm = this.formBuilder.group({
    'userName': ['18515864873', [Validators.required, Validators.minLength(4)]],// 第一个参数是默认值
    'userPwd': ['123456', [Validators.required, Validators.minLength(4)]]
  });

}
