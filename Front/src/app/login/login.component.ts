import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { User } from '../services/interfaces';
import { LoginService } from '../services/login.service';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public loading: Boolean;
  public showPassword: Boolean;
  public user: User;
  public error = {
    status: false,
    error: '',
  };

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private toastr: NbToastrService,
    private request: RequestService,
    ) {
    this.form = formBuilder.group({
      user: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  login(valid) {
    this.loading = true;

    if (valid) {
      const userData = this.form.value;

      this.request.getAuthenticate().subscribe((result: any) => {
        // this.toastr.success('Token generado', 'Éxito');
        this.request.setToken(result.token);
        this.request.getData('getMongoData', userData).subscribe((res: any) => {
          if (res) {
            this.user = {
              User: res.empleados[0].Employeduser,
              Name: res.empleados[0].Employedname,
              Tel: res.empleados[0].Employedname,
              Email: res.empleados[0].Employedemail,
              City: res.empleados[0].Employedcity,
              Position: res.empleados[0].Employedposition,
              Rol: res.empleados[0].Employedrol,
              Token: result.token
            }
            if (res.empleados[0].Employedrol === 'admin') {
              this.loginService.setUser(this.user);
              this.router.navigate(['/main']);
              setTimeout(() => {
                this.toastr.success('Administrador', 'Bienvenido');
              }, 1000);

            } else if (res.empleados[0].Employedrol === 'user') {
              this.loginService.setUser(this.user);
              this.router.navigate(['/user']);
              setTimeout(() => {
                this.toastr.success('Usuario', 'Bienvenido');
              }, 1000);
            }
          } else {
            this.error.status = true;
            this.error.error = 'Empleado no encontrado';
            this.form.reset();
          }

        }, (err: any) => {
          console.log(err);
          this.error.status = true;
          this.error.error = err;
          this.form.reset();
          localStorage.clear();
          err.status === 403 ? this.toastr.warning('Token vencido ', 'Error') : err.status === 401 ? this.toastr.warning('No autorizado ', 'Error') : null;
        });

      }, (err: any) => {
        console.log(err);
        this.error.status = true;
        this.error.error = err;
        this.form.reset();
        this.toastr.warning('Error en la autenticacion', 'Wrong');
      });

    }

  }

  logout() {
    localStorage.clear();
  }

  resetError() {
    if (this.error.status) {
      this.error.status = false;
    }
  }

}
