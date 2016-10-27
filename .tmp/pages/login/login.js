var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { Signup } from '../signup/signup';
import { HomePage } from '../home/home';
import { ResetPassword } from '../reset-password/reset-password';
export var Login = (function () {
    function Login(nav, authData, formBuilder, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.emailChanged = false;
        this.passwordChanged = false;
        this.submitAttempt = false;
        /**
         * Creates a ControlGroup that declares the fields available, their values and the validators that they are going
         * to be using.
         *
         * I set the password's min length to 6 characters because that's Firebase's default, feel free to change that.
         */
        this.loginForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
        });
    }
    /**
     * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
     */
    Login.prototype.elementChanged = function (input) {
        var field = input.inputControl.name;
        this[field + "Changed"] = true;
    };
    /**
     * If the form is valid it will call the AuthData service to log the user in displaying a loading component while
     * the user waits.
     *
     * If the form is invalid it will just log the form value, feel free to handle that as you like.
     */
    Login.prototype.loginUser = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(function (authData) {
                _this.nav.setRoot(HomePage);
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
    };
    Login.prototype.goToSignup = function () {
        this.nav.push(Signup);
    };
    Login.prototype.goToResetPassword = function () {
        this.nav.push(ResetPassword);
    };
    Login = __decorate([
        Component({
            selector: 'page-login',template:/*ion-inline-start:"/Users/diegoalarcon/Development/QueComemosApp/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img src="http://placehold.it/300x100">\n\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input #email formControlName="email" type="email" (change)="elementChanged(email)"\n        placeholder="Your email address"\n        [class.invalid]="!loginForm.controls.email.valid && (emailChanged || submitAttempt)"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid  && (emailChanged || submitAttempt)">\n      <p>Please enter a valid email.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input #password formControlName="password" type="password" (change)="elementChanged(password)"\n        placeholder="Your password"\n        [class.invalid]="!loginForm.controls.password.valid && (passwordChanged || submitAttempt)"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid  && (passwordChanged || submitAttempt)">\n      <p>Your password needs more than 6 characters.</p>\n    </ion-item>\n\n    <button ion-button block type="submit">\n      Login\n    </button>\n\n  </form>\n\n    <button ion-button block clear (click)="goToSignup()">\n      Create a new account\n    </button>\n\n    <button ion-button block clear (click)="goToResetPassword()">\n      I forgot my password\n    </button>\n</ion-content>\n'/*ion-inline-end:"/Users/diegoalarcon/Development/QueComemosApp/src/pages/login/login.html"*/,
        }), 
        __metadata('design:paramtypes', [NavController, AuthData, FormBuilder, AlertController, LoadingController])
    ], Login);
    return Login;
}());
//# sourceMappingURL=login.js.map