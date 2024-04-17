import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSpinnerModule } from 'ngx-spinner';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
     NgxSpinnerModule,
    NgxSpinnerModule.forRoot({ type: 'ball-spin-clockwise-fade' })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  // providers: [LoginService,
  //   { provide: NZ_I18N, useValue: en_US },
  //  //{ provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [LoginService] },
  //   // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  //   // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  //  {
  //     provide: HTTP_INTERCEPTORS,
  //      useClass: SpinnerInterceptor,
  //    multi: true,
  //  },

//],
  bootstrap: [AppComponent]
})
export class AppModule { }
