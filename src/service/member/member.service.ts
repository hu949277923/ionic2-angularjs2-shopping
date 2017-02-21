import { Headers, Http, RequestOptions  } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Config } from '../../app/config';

@Injectable()
export class MemberService {
  private headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
  private options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) { }

  /**
   * 登录
   * @param username 用户名
   * @param password 密码
   * @returns {any}
   */
  login(username: string, password: string):Promise<any> {
    console.log(Config.apiServer);
    const url = `${Config.apiServer}/login`;
    let req = {
      "data":{
        "loginName":username,
        "loginPassword": password
      },
      "token":"",
      "versionCode":"1",
      "deviceId":"355848069264888",
      "deviceType":"Android"
    };
    console.log(req);
    return this.http
      .post(url, JSON.stringify(req), this.options)
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  /**
   * 异常处理
   * @param error
   * @returns {Promise<void>|Promise<T>}
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
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
