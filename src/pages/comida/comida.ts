import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProfileData } from '../../providers/profile-data';

@Component({
  selector: 'page-comida',
  templateUrl: 'comida.html'
})
export class Comida {
public userProfile: any;
public parameter1:any;
public parameter2:any;
public parameter3:any;
public parameterIngrediente: any;
  constructor(public navCtrl: NavController, public profileData: ProfileData, private navParams: NavParams, private alertCtrl: AlertController) {
  		this.parameter1 = navParams.get('param1');
  		this.parameter2 = navParams.get('param2');
  		this.parameterIngrediente = this.parameter1.ingredientes;
  		console.log(this.parameter1);
  		console.log(this.parameter2);
  		this.profileData = profileData;

  		this.profileData.getUserProfile().on('value', (data) => {
	      this.userProfile = data.val();
	    });
  }
  updateNameComida(){
  let alert = this.alertCtrl.create({
    message: "Nombre de Comida",
    inputs: [
      {
        name: 'comidaName',
        placeholder: 'Milanesas con pure',
        value: this.parameter1.name
      },
    ],
    buttons: [
      {
        text: 'Cancel',
      },
      {
        text: 'Save',
        handler: data => {
          this.profileData.updateNameComida(data.comidaName, this.parameter2);
        }
      }
    ]
  });
  alert.present();
}

 updateIngredientes(){
  console.log(this.parameterIngrediente);
}

}
