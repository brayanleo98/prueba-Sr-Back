import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  token: string = '';
  urlApi: String;
  headers: HttpHeaders;
  headersAut: HttpHeaders;
  constructor(private http: HttpClient) {
    this.urlApi = "http://localhost:3000/api";

    this.headersAut = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getToken() {
    return this.token;
  }

  setToken(data) {
    this.token = data;
    this.headersAut = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  }

  getData(url, body) {
    if (this.token) {
      return this.http.post(this.urlApi + '/' + url, body, { headers: this.headersAut });
    } else {
      return this.http.post(this.urlApi + '/' + url, body, { headers: this.headers });
    }
  }

  getAuthenticate() {
    return this.http.get(this.urlApi + '/authenticate', { headers: this.headers });
  }
}
