import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BadaniaService } from "../services/badania";
import { HttpModule } from '@angular/http';


/*Zaimportowanie stron aplikacji*/
import { MyApp } from './app.component';
import { BadaniaPage } from '../pages/badania/badania';
import { BadaniePage } from '../pages/badanie/badanie';
import { EdytujBadaniePage } from '../pages/edytuj-badanie/edytuj-badanie';
import { LokalizujPage } from '../pages/lokalizuj/lokalizuj';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import { AuthService } from "../services/auth";
import { bOptionsPage } from "../pages/badania/b-options/b-options";
import { AgmCoreModule } from "@agm/core";
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    BadaniaPage,
    BadaniePage,
    EdytujBadaniePage,
    LokalizujPage,
    TabsPage,
    SigninPage,
    SignupPage,
    bOptionsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8kCkUHBD2KjqkWpCsDyaIvkqKvbJ0EPw'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BadaniaPage,
    BadaniePage,
    EdytujBadaniePage,
    LokalizujPage,
    TabsPage,
    SigninPage,
    SignupPage,
    bOptionsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BadaniaService,
    AuthService,
    Geolocation
  ]
})
export class AppModule {}
