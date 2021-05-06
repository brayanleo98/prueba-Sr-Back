import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbToastRef, NbToastrModule, NbToastrService } from '@nebular/theme';
import { ComunicationService } from '../services/comunication.service';
import { User } from '../services/interfaces';
import { LoginService } from '../services/login.service';
import { RequestService } from '../services/request.service';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public bolSim = false;
  public api: string;
  public result: string;
  public simArray = [];
  public user: User;
  public editData = {
    address: 'Fake street 123',
    dependents: '5',
    area: 'Administrative'
  }

  constructor(private request: RequestService,
    private toastr: NbToastrService,
    private loginService: LoginService,
    private router: Router,
    private comunication: ComunicationService,
    private dialogService: NbDialogService) {
    this.user = loginService.getUser();
  }

  ngOnInit(): void {
    this.comunication.dataUser$.subscribe(res => {
      console.log(res);
      this.editData = res;
    })

  }

  getSim() {
    this.simArray = [];
    this.request.getData('getApiPoke', {}).subscribe((res: any) => {
      res.data.forEach(element => {
        this.simArray.push({ name: element.character, title: element.quote, picture: element.image })
      });
      this.bolSim = true;
    }, (err: any) => {
      console.log(err);
      this.bolSim = false;
      err.status === 403 ? this.toastr.warning('Token vencido ', 'Error') : err.status === 401 ? this.toastr.warning('No autorizado ', 'Error') : null;
      this.loginService.logout();
      this.router.navigate(['/user']);
    });
  }

  logOut() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  openDialog() {
    this.dialogService.open(DialogEditComponent, {
      context: {
        userData: this.editData
      },
      closeOnBackdropClick: false
    })
  }
}
