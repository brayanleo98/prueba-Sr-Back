import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbInputModule, NbThemeModule, NbLayoutModule, NbSelectModule, NbListModule, NbToastrService, NbToastrModule, NbUserModule, NbIconModule, NbSpinnerModule, NbProgressBarModule, NbDialogModule, NbTimepickerModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { DialogEditComponent } from './main/dialog-edit/dialog-edit.component';
import { DialogUserComponent } from './user/dialog-user/dialog-user.component';
import { LanguagePipe } from './services/language.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    UserComponent,
    DialogEditComponent,
    DialogUserComponent,
    LanguagePipe
  ],
  imports: [
    BrowserModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbSelectModule,
    NbListModule,
    HttpClientModule,
    NbToastrModule.forRoot(),
    NbUserModule,
    NbIconModule,
    NbSpinnerModule,
    NbProgressBarModule,
    NbDialogModule.forRoot(),
    NbTimepickerModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
