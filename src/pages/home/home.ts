import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';
import { Profile } from '../profile/profile';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public items:any;
  constructor(public navCtrl: NavController, public authData: AuthData, public http: Http) {
       this.http = http;
        this.http.get("https://api.randomuser.me/?results=10")
            .subscribe(data =>{
              //console.log(data['_body']);
             this.items=JSON.parse(data['_body']).results;//Bind data to items object
            },error=>{
                console.log(error);// Error getting the data
            } );
  }

  logMeOut() {
    this.authData.logoutUser().then( () => {
      this.navCtrl.setRoot(Login);
    });
  }

  goToProfile(){
    this.navCtrl.push(Profile);
  }

  buttonClick(event){
   console.log("button clicked");
   console.log(event);
  }
 
  itemClicked(event,itemData){
    console.log("item clicked");
    console.log(event);
    console.log(itemData);
  }

}