import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AttendingPage } from '../pages/attending/attending';
import { EventsPage } from '../pages/events/events';
import { TabsPage } from '../pages/tabs/tabs';
import { EventsService } from "../services/events";


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDfY69hHkunHwb62MPrpRluhO3D5ZLvhrY",
  authDomain: "my-first-project-5cdc5.firebaseapp.com",
  databaseURL: "https://my-first-project-5cdc5.firebaseio.com",
  storageBucket: "my-first-project-5cdc5.appspot.com",
  messagingSenderId: '326880771473'
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    EventsPage,
    AttendingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    EventsPage,
    AttendingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventsService
  ]
})
export class AppModule {}
