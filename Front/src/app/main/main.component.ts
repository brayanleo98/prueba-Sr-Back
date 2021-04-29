import { Component, OnInit } from '@angular/core';
import { NbToastRef, NbToastrModule, NbToastrService } from '@nebular/theme';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public bolCod = false;
  public api: string;
  public result: string;
  constructor(private request: RequestService,
    private toastr: NbToastrService,) {
  }

  ngOnInit(): void {
  }

  token() {
    this.request.getAuthenticate().subscribe((res: any) => {
      console.log(res);
      this.toastr.success('Token generado', 'Éxito');
      this.request.setToken(res.token);
    }, (err: any) => {
      console.log(err);
      // const toastRef: NbToastRef = this.toastr.show('Error en la autenticacion','Error')
      this.toastr.warning('Error en la autenticacion', 'Wrong');
    });
  }

  consultar() {
    this.bolCod = false;
    console.log(this.api);

    switch (this.api) {
      case '1':
        this.getRequest('getApiPoke');
        break;
      case '2':
        this.getRequest('test');
        break;
      case '3':
        this.getRequest('getMongoData');
        break;
      default:
        this.bolCod = true;
        break;
    }
  }

  getRequest(url) {
    this.request.getData(url).subscribe((res: any) => {
      console.log(res);
      // this.toastr.success('Token generado', 'Éxito');
      this.result = JSON.stringify(res);
      this.bolCod = true;
    }, (err: any) => {
      console.log(err);
      // const toastRef: NbToastRef = this.toastr.show('Error en la autenticacion','Error')
      this.bolCod = false;
      this.toastr.warning('Error en la peticion ' + err.error, 'Wrong');
    });
  }
}
