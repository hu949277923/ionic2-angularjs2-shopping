import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from 'ionic-angular';
import { MemberService } from '../../service/member/member.service';

/*
import { FormGroup, FormBuilder, Validators } from '@angular/forms';*/
/*mport { ToastController } from 'ionic-angular';
import { UserInfoService } from "../../service/member/UserInfoService";
import { HttpService } from "../../service/member/HttpService";
import { StorageService } from "../../service/member/StorageService";*/

/*import {
  FormBuilder,
  Validators
} from '@angular/forms';*/

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ MemberService ]
})
export class LoginPage implements OnInit {
  HEADER:any;
  //form;
  username: string;
  password:string;
  submitted: boolean = false;
  ifPwd: boolean=true;
  constructor(/*private formBuilder: FormBuilder,
              public toastCtrl: ToastController,*/
              public router:Router/*,
              private userInfoService: UserInfoService,
              private storageService: StorageService*//*,
              private fb: FormBuilder*/,
              public alertCtrl:AlertController,
              private memberService:MemberService) {
    this.HEADER= {
      isShowBack:true,
      title: '登录'
    }

  }
  ngOnInit(): void {/*
    this.buildForm();*/
    this.username = '';
    this.password = '';
  }
  onSubmit(): void {
    this.submitted = true;

    let regUserName:any = /^(([0-9a-zA-Z]{0,20})|(1\d{10})|([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*))$/;
    let regPwd:any =  /^(?![\d]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}$/;

    let errMsg: string = '';
    let isHasErr: boolean = false;

    // 校验密码
    if(!regPwd.test(this.password)){
      isHasErr = true;
      errMsg = '密码由6-20位字符，数字和字母组成';
    }

    //校验用户名
    if(!regUserName.test(this.username)){
      isHasErr = true;
      errMsg = '用户名格式不正确';
    }
    let alert:any;

    if(isHasErr){
      alert = this.alertCtrl.create({
        title: errMsg,
        buttons: [{
          text: '确定',
          handler: () => {

          }
        }]
      });
      alert.present();
    }else{
      this.login(this.username, this.password);
    }
  }
  // 登录
  login(username:string, password:string): void {
    this.memberService.login(username, password).then((res)=>{
      if(res.code == 200) {
        console.log('登录成功')
      }else{
        let alert = this.alertCtrl.create({
          title: res.msg,
          buttons: [{
            text: '确定',
            handler: () => {

            }
          }]
        });
        alert.present();
      }
    });
  }
  /*
  loginForm = this.formBuilder.group({
    'userName': ['admin@163.com', [Validators.required, Validators.minLength(4),Validators.pattern('^([a-zA-Z0-9_.]*)((@[a-zA-Z0-9_.]*)\.([a-zA-Z]{2}|[a-zA-Z]{3}))$')]],// 第一个参数是默认值
    //'userName': ['admin@163.com2', [Validators.required, Validators.minLength(4), Validators.pattern('[(\u4e00-\u9fa5)0-9a-zA-Z\_\s@]+$')]],// 第一个参数是默认值
    'userPwd': ['123456', [Validators.required, Validators.minLength(4)]]
  });

  login(user, _event) {
    //this.router.navigate(['/buyerHome']);
    _event.preventDefault();//该方法将通知 Web 浏览器不要执行与事件关联的默认动作
    this.userInfoService.login(user).then(data => {
      alert(JSON.stringify(data));
      if (data.Result.ID > 0)//登录成功
      {
        this.storageService.write('UserInfo', data.Result);
        //测试写缓存
        //let ss = this.storageService.read<UserInfoData>('UserInfo');
        //传参
        //this.navCtrl.push(MemberPage, { item: data.Result.ID });
        this.router.navigate(['/buyerHome']);
      }
      else {
        let toast = this.toastCtrl.create({
          message: '用户名或密码错误.',
          duration: 3000,
          position: 'middle',
          showCloseButton: true,
          closeButtonText: '关闭'
        });
        toast.present();
      }

    });
  }
*/
  //密码的显示隐藏
  pwdShowHide(){
    if(this.ifPwd==false){
      this.ifPwd=true;
    }
    else{
      this.ifPwd=false;
    }
  }

  //跳转到注册页面
  registerPage(){
    this.router.navigate(['/register']);
  }

  //跳转到忘记密码页面
  forgetPwdPage(){
    this.router.navigate(['/forgetPwd']);
  }

}
