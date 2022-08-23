import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Views/main/main.component';
import { LoginComponent } from './Views/login/login.component';
import { UserprofileComponent } from './Views/userprofile/userprofile.component';
import { PetshopComponent } from './Views/petshop/petshop.component';
import { PetAdopterComponent } from './Views/pet-adopter/pet-adopter.component';;
import { NavBarComponent } from './Componets/nav-bar/nav-bar.component';
import { SideNavComponent } from './Componets/side-nav/side-nav.component';
import { ErrorPageComponent } from './Views/error-page/error-page.component';
import { NotFoundComponent } from './Views/not-found/not-found.component';
import { SignInComponent } from './Views/sign-in/sign-in.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { AdoptingCardComponent } from './Componets/adopting-card/adopting-card.component';
import { AdoptingInstructionsComponent } from './Componets/adopting-instructions/adopting-instructions.component';
import { AdoptingTitleComponent } from './Componets/adopting-title/adopting-title.component';
import { PetshopCardComponent } from './Componets/petshop-card/petshop-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    UserprofileComponent,
    PetshopComponent,
    PetAdopterComponent,
    NavBarComponent,
    SideNavComponent,
    ErrorPageComponent,
    NotFoundComponent,
    SignInComponent,
    DashboardComponent,
    AdoptingCardComponent,
    AdoptingInstructionsComponent,
    AdoptingTitleComponent,
    PetshopCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
