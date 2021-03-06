var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
export var MyApp = (function () {
    function MyApp(platform) {
        var _this = this;
        this.rootPage = HomePage;
        var config = {
            apiKey: "AIzaSyDLFcFgoMPkcMBwW6A1WMAvUeBYydNVaNE",
            authDomain: "quecocinamos-5bd93.firebaseapp.com",
            databaseURL: "https://quecocinamos-5bd93.firebaseio.com",
            storageBucket: "quecocinamos-5bd93.appspot.com",
            messagingSenderId: "1004094255945"
        };
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged(function (user) {
            if (!user) {
                _this.rootPage = Login;
                console.log("There's not a logged in user!");
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
    MyApp = __decorate([
        Component({
            template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
        }), 
        __metadata('design:paramtypes', [Platform])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map