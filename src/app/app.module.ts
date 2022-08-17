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
import { AdoptingTitleComponent } from './Componets/adopting-title/adopting-title.component';
import { AdoptingInstructionsComponent } from './Componets/adopting-instructions/adopting-instructions.component';
import { AdoptingCardComponent } from './Componets/adopting-card/adopting-card.component';


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
    AdoptingTitleComponent,
    AdoptingInstructionsComponent,
    AdoptingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
