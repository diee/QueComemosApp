import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';

import { Login } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';



@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform) {

    const config = {
      apiKey: "AIzaSyDLFcFgoMPkcMBwW6A1WMAvUeBYydNVaNE",
      authDomain: "quecocinamos-5bd93.firebaseapp.com",
      databaseURL: "https://quecocinamos-5bd93.firebaseio.com",
      storageBucket: "quecocinamos-5bd93.appspot.com",
      messagingSenderId: "1004094255945"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        this.rootPage = Login;
        console.log("There's not a logged in user!");
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}