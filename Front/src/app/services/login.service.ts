import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import * as moment from 'moment';
import { User } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
//   error: any;
//   userCampaingArray: Array<UserCampaign>;

  constructor() { }

  setUser(data) {
    localStorage.setItem('data', CryptoJS.AES.encrypt(JSON.stringify(data), moment(new Date()).format('YYYY-MM-DD')).toString());
  }

  getUser(): User {
    try {
      return JSON.parse(
        CryptoJS.AES.decrypt(localStorage.getItem('data'), moment(new Date()).format('YYYY-MM-DD')).toString(CryptoJS.enc.Utf8));
    } catch (error) {
      this.logout();
    }
  }

  logout() {
    localStorage.clear();
  }

}
