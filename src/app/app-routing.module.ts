import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { MainComponent } from './Views/main/main.component';
import { PetAdopterComponent } from './Views/pet-adopter/pet-adopter.component';
import { PetshopComponent } from './Views/petshop/petshop.component';
import { SignInComponent } from './Views/sign-in/sign-in.component';
import { UserprofileComponent } from './Views/userprofile/userprofile.component';

const routes: Routes = [
  { path: "", 
  component: MainComponent 
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"petadopter",
    component:PetAdopterComponent
  },
  {
    path:"petshop",
    component:PetshopComponent
  },
  {
    path:"userprofile",
    component:UserprofileComponent
  },
  {
    path:"signin",
    component:SignInComponent    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
