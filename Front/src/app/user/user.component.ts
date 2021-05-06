import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { User } from '../services/interfaces';
import { LoginService } from '../services/login.service';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public bolSim = false;
  public bolLan = false;
  public api: string;
  public result: string;
  public lanArray = [1,2,3,4,5];
  public user: User;
  public editData = [
    {
      day: 1,
      sche: '08:00 - 18:00',
    },
    {
      day: 2,
      sche: '08:00 - 18:00',
    },
    {
      day: 3,
      sche: '08:00 - 18:00',
    },
    {
      day: 4,
      sche: '08:00 - 18:00',
    },
    {
      day: 5,
      sche: '08:00 - 18:00',
    },
  ]
  public sche = {
    in: '8:00',
    out: '18:00',
  }
  constructor(private request: RequestService,
    private toastr: NbToastrService,
    private loginService: LoginService,
    private router: Router,) {
    this.user = loginService.getUser();
    
  }

  ngOnInit(): void {

  }

  logOut() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  edit() {
    this.bolSim = true;
  }

  getRespond(event) {
    this.bolSim = false;
    this.sche.in = event.in;
    this.sche.out = event.out;
    this.editData = event.time;
  }

  changeLanguage() {
    this.bolLan = true;
  }
}
