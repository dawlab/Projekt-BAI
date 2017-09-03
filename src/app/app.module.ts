import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BadaniaService } from "../services/badania";


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

@NgModule({
  declarations: [
    MyApp,
    BadaniaPage,
    BadaniePage,
    EdytujBadaniePage,
    LokalizujPage,
    TabsPage,
    SigninPage,
    SignupPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    SignupPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BadaniaService,
    AuthService
  ]
})
export class AppModule {}
