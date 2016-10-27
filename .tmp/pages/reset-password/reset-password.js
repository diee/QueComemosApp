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
export var ResetPassword = (function () {
    function ResetPassword(authData, formBuilder, nav, loadingCtrl, alertCtrl) {
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.emailChanged = false;
        this.passwordChanged = false;
        this.submitAttempt = false;
        this.resetPasswordForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required])],
        });
    }
    /**
     * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
     */
    ResetPassword.prototype.elementChanged = function (input) {
        var field = input.inputControl.name;
        this[field + "Changed"] = true;
    };
    /**
     * If the form is valid it will call the AuthData service to reset the user's password displaying a loading
     *  component while the user waits.
     *
     * If the form is invalid it will just log the form value, feel free to handle that as you like.
     */
    ResetPassword.prototype.resetPassword = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        }
        else {
            this.authData.resetPassword(this.resetPasswordForm.value.email).then(function (user) {
                var alert = _this.alertCtrl.create({
                    message: "We just sent you a reset link to your email",
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel',
                            handler: function () {
                                _this.nav.pop();
                            }
                        }
                    ]
                });
                alert.present();
            }, function (error) {
                var errorMessage = error.message;
                var errorAlert = _this.alertCtrl.create({
                    message: errorMessage,
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel'
                        }
                    ]
                });
                errorAlert.present();
            });
        }
    };
    ResetPassword = __decorate([
        Component({
            selector: 'page-reset-password',template:/*ion-inline-start:"/Users/diegoalarcon/Development/QueComemosApp/src/pages/reset-password/reset-password.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Reset your Password\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img src="http://placehold.it/300x100">\n  <form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>\n  <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input #email formControlName="email" type="email" (change)="elementChanged(email)"\n        placeholder="Your email address"\n        [class.invalid]="!resetPasswordForm.controls.email.valid && (emailChanged || submitAttempt)"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!resetPasswordForm.controls.email.valid  && (emailChanged || submitAttempt)">\n      <p>Please enter a valid email.</p>\n    </ion-item>\n\n    <button ion-button block type="submit">\n      Reset your Password\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/diegoalarcon/Development/QueComemosApp/src/pages/reset-password/reset-password.html"*/,
        }), 
        __metadata('design:paramtypes', [AuthData, FormBuilder, NavController, LoadingController, AlertController])
    ], ResetPassword);
    return ResetPassword;
}());
//# sourceMappingURL=reset-password.js.map