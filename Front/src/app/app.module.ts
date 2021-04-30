import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbInputModule, NbThemeModule, NbLayoutModule, NbSelectModule, NbListModule, NbToastrService, NbToastrModule, NbUserModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    FormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbSelectModule,
    NbListModule,
    HttpClientModule,
    NbToastrModule.forRoot(),
    NbUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
