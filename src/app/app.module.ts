import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventCreate } from '../pages/event-create/event-create';
import { EventDetail } from '../pages/event-detail/event-detail';
import { EventList } from '../pages/event-list/event-list';
import { Login } from '../pages/login/login';
import { Profile } from '../pages/profile/profile';
import { ResetPassword } from '../pages/reset-password/reset-password';
import { Signup } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { IngredientesPage } from '../pages/ingredientes/ingredientes';
import { TabsPage } from '../pages/tabs/tabs';
import { Comida } from '../pages/comida/comida';


// Import providers
import { AuthData } from '../providers/auth-data';
import { EventData } from '../providers/event-data';
import { ProfileData } from '../providers/profile-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventCreate,
    EventDetail,
    EventList,
    Login,
    Profile,
    ResetPassword,
    Signup,
    AboutPage,
    IngredientesPage,
    TabsPage,
    Comida
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventCreate,
    EventDetail,
    EventList,
    Login,
    Profile,
    ResetPassword,
    Signup,
    AboutPage,
    IngredientesPage,
    TabsPage,
    Comida
  ],
  providers: [
  ProfileData,
  AuthData]
})
export class AppModule {}
