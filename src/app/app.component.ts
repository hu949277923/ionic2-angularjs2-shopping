import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

// import { GoodsListPage } from '../pages/goods-list/goods-list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // make HelloIonicPage the root (or first) page
  // rootPage: any = GoodsListPage;

  constructor(
    public platform: Platform
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

}
