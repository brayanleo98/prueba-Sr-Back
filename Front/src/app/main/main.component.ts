import { Component, OnInit } from '@angular/core';
import { NbToastRef, NbToastrModule, NbToastrService } from '@nebular/theme';
import { RequestService } from '../services/request.service';

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
  constructor(private request: RequestService,
    private toastr: NbToastrService,) {
  }

  ngOnInit(): void {
  }

  token() {
    this.request.getAuthenticate().subscribe((res: any) => {
      this.toastr.success('Token generado', 'Éxito');
      this.request.setToken(res.token);
    }, (err: any) => {
      console.log(err);
      // const toastRef: NbToastRef = this.toastr.show('Error en la autenticacion','Error')
      this.toastr.warning('Error en la autenticacion', 'Wrong');
    });
  }

  consultar() {
    this.bolSim = false;

    switch (this.api) {
      case '1':
        this.getSim('getApiPoke');
        break;
      case '2':
        this.getRequest('test');
        break;
      case '3':
        this.getRequest('getMongoData');
        break;
      default:
        break;
    }
  }

  getSim(url) {
    this.simArray = []
    this.request.getData(url).subscribe((res: any) => {
      res.data.forEach(element => {
        this.simArray.push({ name: element.character, title: element.quote, picture: element.image })
      });
      this.bolSim = true;
    }, (err: any) => {
      console.log(err);
      this.bolSim = false;
      err.status === 403 ? this.toastr.warning('Token vencido ', 'Error') : err.status === 401 ? this.toastr.warning('No autorizado ', 'Error') : null;
    });
  }

  getRequest(url) {
    this.simArray = []
    this.request.getData(url).subscribe((res: any) => {
      res.empleados.forEach(element => {
        this.simArray.push({ name: element.Employedname, title: element.Employedid, picture: '' })
      });
      this.bolSim = true;
    }, (err: any) => {
      console.log(err);
      this.bolSim = false;
      err.status === 403 ? this.toastr.warning('Token vencido ', 'Error') : err.status === 401 ? this.toastr.warning('No autorizado ', 'Error') : null;
    });
  }
}
