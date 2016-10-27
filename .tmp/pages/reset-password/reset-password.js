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
import { NavController } from 'ionic-angular';
/*
  Generated class for the ResetPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ResetPassword = (function () {
    function ResetPassword(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ResetPassword.prototype.ionViewDidLoad = function () {
        console.log('Hello ResetPassword Page');
    };
    ResetPassword = __decorate([
        Component({
            selector: 'page-reset-password',template:/*ion-inline-start:"/Users/diegoalarcon/Development/QueComemosApp/src/pages/reset-password/reset-password.html"*/'<!--\n  Generated template for the ResetPassword page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ResetPassword</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/diegoalarcon/Development/QueComemosApp/src/pages/reset-password/reset-password.html"*/
        }), 
        __metadata('design:paramtypes', [NavController])
    ], ResetPassword);
    return ResetPassword;
}());
//# sourceMappingURL=reset-password.js.map