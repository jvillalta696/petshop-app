import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,}from '@angular/fire/auth'
import { createUrlTreeFromSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private auth:Auth) { }

  signup({email,psw}:any){
    return createUserWithEmailAndPassword(this.auth,email,psw);
  }
  signin({email,psw}:any){
    return signInWithEmailAndPassword(this.auth,email,psw);
  }
  signout(){
    return signOut(this.auth);
  }

  getCurrentUser(){
    return this.auth.currentUser
  }
}
