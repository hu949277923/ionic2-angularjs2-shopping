import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';
// 入口文件
import { MyApp } from './app.component';
// 页面
import { GoodsListPage } from '../pages/goods-list/goods-list';
import { GoodsDetailPage } from '../pages/goods-detail/goods-detail';
import { OrderConfirmPage } from '../pages/order-confirm/order-confirm';
import { OrderPayStatusPage } from '../pages/order-pay-status/order-pay-status';
import { BuyOrderListPage } from '../pages/buyer-order-list/buyer-order-list';
import { BuyOrderDetailPage } from '../pages/buyer-order-detail/buyer-order-detail';
import { BuyHomePage } from '../pages/buy-home/buy-home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register'
import { BuyAddressListPage } from '../pages/buyer-address-list/buyer-address-list';
import { BuyerMemberManagePage} from '../pages/buyer-member-manage/buyer-member-manage';
import { BuyerAddressEditPage } from '../pages/buyer-address-edit/buyer-address-edit';
import { BuyerAddressAddPage } from '../pages/buyer-address-add/buyer-address-add';
import { FeedBackPage } from '../pages/feed-back/feed-back';// 意见反馈
import { ForgetPwdPage } from '../pages/forget-pwd/forget-pwd';
import { ModifyPwdPage } from '../pages/modify-pwd/modify-pwd';
// 组件
import { HeaderComponent } from '../components/header/header';
import { SlidersComponent } from '../components/sliders/sliders';
import { goodsDescComponent } from '../components/goods-desc/goods-desc';
import { goodsParamsComponent } from '../components/goods-params/goods-params';
import { goodsAftermarketComponent } from '../components/goods-aftermarket/goods-aftermarket';
import { GoodsSpecComponent } from '../components/goods-spec/goods-spec';
import { GoodsSpecModalComponent } from '../components/goods-spec-modal/goods-spec-modal'
import { PlusMinusComponent } from '../components/plus-minus/plus-minus'
// 服务
import { AuthGuard } from '../service/auth-guard/auth-guard.service';
// 路由
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    MyApp,
    GoodsListPage,
    GoodsDetailPage,
    OrderConfirmPage,
    OrderPayStatusPage,
    BuyOrderListPage,
    BuyOrderDetailPage,
    BuyHomePage,
    LoginPage,
    RegisterPage,
    BuyerMemberManagePage,
    BuyAddressListPage,
    BuyerAddressEditPage,
    BuyerAddressAddPage,
    FeedBackPage,
    ForgetPwdPage,
    ModifyPwdPage,
    HeaderComponent,
    SlidersComponent,
    goodsDescComponent,
    goodsParamsComponent,
    goodsAftermarketComponent,
    GoodsSpecComponent,
    GoodsSpecModalComponent,
    PlusMinusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    }),
    RouterModule.forRoot([
      { path: 'goodsList', component: GoodsListPage },
      { path: 'goodsDetail/:id', component: GoodsDetailPage },
      { path: 'orderConfirm', component: OrderConfirmPage },
      { path: 'orderPayStatus', component: OrderPayStatusPage },
      { path: 'buyOrderList', component: BuyOrderListPage },
      { path: 'buyOrderDetail', component: BuyOrderDetailPage },
      { path: 'buyerOrderList', component: BuyOrderListPage },
      { path: 'buyerOrderDetail', component: BuyOrderDetailPage },
      { path: 'login', component: LoginPage },
      { path: 'register', component: RegisterPage },
      { path: 'buyerHome', component: BuyHomePage },
      { path: 'buyerMemberManage', component: BuyerMemberManagePage },
      {
        path: 'buyerAddressList',
        canActivate: [AuthGuard],
        component: BuyAddressListPage
      },
      { path: 'buyerAddressEdit', component: BuyerAddressEditPage },
      { path: 'buyerAddressAdd', component: BuyerAddressAddPage },
      { path: 'feedBackPage', component: FeedBackPage },
      { path:'forgetPwd', component: ForgetPwdPage},
      { path: 'modifyPwd', component: ModifyPwdPage},
      { path: '', component: GoodsListPage }
    ], {
      useHash: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GoodsListPage,
    GoodsSpecModalComponent,
    BuyAddressListPage
    /*,
    GoodsDetailPage*/
  ],
  providers: [
    AuthGuard
  ]
})
export class AppModule {}
