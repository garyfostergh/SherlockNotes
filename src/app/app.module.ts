import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

const firebaseConfig = {
  "apiKey": "AIzaSyBR-rZYNPBpBFIgMrQF7flr_lSnKwRytaU",
  "databaseURL": "https://sherlocknotescase.firebaseio.com",
  "storageBucket": "sherlocknotescase.appspot.com",
  "authDomain": "sherlocknotescase.firebaseapp.com",
  "messagingSenderId": "341997958663",
  "projectId": "sherlocknotescase"
  };


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
