import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  public user: any;
  constructor() { }
  public _dataUser = new Subject<any>();
  dataUser$ = this._dataUser.asObservable();

  public setData(data) {
    this.user = data;
    this._dataUser.next(data);
  }
}
