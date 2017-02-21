import { GoodsList } from './goods-list';
import { GOODSLIST } from '../../mock/goods/goods-list';
import { Injectable } from '@angular/core';

@Injectable()
export class GoodsListService {
  getGoodsList(): Promise<GoodsList[]> {
    return Promise.resolve(GOODSLIST);
  }
  getGoodsListSlowly(): Promise<GoodsList[]> {
    return new Promise<GoodsList[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getGoodsList());
  }
  /*getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }*/
}
