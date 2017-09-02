import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
<<<<<<< HEAD
=======
import { BadaniaService } from "../services/badania";

>>>>>>> Dodanie elementow models i service, dodanie informacji o normach badan

/*Zaimportowanie stron aplikacji*/
import { MyApp } from './app.component';
import { BadaniaPage } from '../pages/badania/badania';
import { BadaniePage } from '../pages/badanie/badanie';
import { EdytujBadaniePage } from '../pages/edytuj-badanie/edytuj-badanie';
import { LokalizujPage } from '../pages/lokalizuj/lokalizuj';
import { TabsPage } from '../pages/tabs/tabs';

<<<<<<< HEAD
=======


>>>>>>> Dodanie elementow models i service, dodanie informacji o normach badan
@NgModule({
  declarations: [
    MyApp,
    BadaniaPage,
    BadaniePage,
    EdytujBadaniePage,
    LokalizujPage,
    TabsPage
    
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    {provide: ErrorHandler, useClass: IonicErrorHandler}
=======
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BadaniaService

>>>>>>> Dodanie elementow models i service, dodanie informacji o normach badan
  ]
})
export class AppModule {}
