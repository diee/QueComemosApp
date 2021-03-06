import { NavController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ProfileData } from '../../providers/profile-data';
import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {
  public userProfile: any;
  public birthDate: string;

  constructor(public nav: NavController, public profileData: ProfileData,
    public authData: AuthData, private alertCtrl: AlertController) {
    this.nav = nav;
    this.profileData = profileData;

    this.profileData.getUserProfile().on('value', (data) => {
      this.userProfile = data.val();
      this.birthDate = this.userProfile.birthDate;
    });

  }

  logOut(){
	  this.authData.logoutUser().then(() => {
	    this.nav.setRoot(Login);
	  });
	}

	updateName(){
		var comidas: { name: string, ingredientes: string }[] = [
		    { "name": "Pollo al horno con papas", "ingredientes": "Pollo, Papas" },
		    { "name": "Milanesas con pure","ingredientes": "Milanesas, Pure"  },
		    { "name": "Tarta de Atun","ingredientes": "Tapa tarta, Atun" },
		    { "name": "Pastel de papas","ingredientes": "Tapa tarta, pure, carne picada, morron, cebolla" }
		];
	  let alert = this.alertCtrl.create({
	    message: "Your first name & last name",
	    inputs: [
	      {
	        name: 'firstName',
	        placeholder: 'Your first name',
	        value: this.userProfile.firstName
	      },
	      {
	        name: 'lastName',
	        placeholder: 'Your last name',
	        value: this.userProfile.lastName
	      },
	    ],
	    buttons: [
	      {
	        text: 'Cancel',
	      },
	      {
	        text: 'Save',
	        handler: data => {
	          this.profileData.updateName(data.firstName, data.lastName, comidas);
	        }
	      }
	    ]
	  });
	  alert.present();
	}

	updateDOB(birthDate){
	  this.profileData.updateDOB(birthDate);
	}

	updateEmail(){
  let alert = this.alertCtrl.create({
    inputs: [
      {
        name: 'newEmail',
        placeholder: 'Your new email',
      },
    ],
    buttons: [
      {
        text: 'Cancel',
      },
      {
        text: 'Save',
        handler: data => {
          this.profileData.updateEmail(data.newEmail);
        }
      }
    ]
  });
  alert.present();
}

	updatePassword(){
	  let alert = this.alertCtrl.create({
	    inputs: [
	      {
	        name: 'newPassword',
	        placeholder: 'Your new password',
	        type: 'password'
	      },
	    ],
	    buttons: [
	      {
	        text: 'Cancel',
	      },
	      {
	        text: 'Save',
	        handler: data => {
	          this.profileData.updatePassword(data.newPassword);
	        }
	      }
	    ]
	  });
	  alert.present();
	}

}