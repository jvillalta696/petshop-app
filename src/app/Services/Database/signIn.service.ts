import { Injectable } from '@angular/core';
import {Firestore, collection, addDoc, setDoc, collectionData, doc,  deleteDoc, updateDoc, } from '@angular/fire/firestore';
import { User } from '@firebase/auth';
import { Observable } from 'rxjs';
import {SignIn}from '../../Interfaces/signIn'

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  getCurrentUser() {
    throw new Error('Method not implemented.');
  }

  constructor(private firestore: Firestore) { }

  addUser(signIn: SignIn,id:string) {
    const userRef = collection(this.firestore, 'UserProfile');
    return setDoc(doc(userRef, id),signIn);
  }

  // getUser(): Observable<SignIn[]>{
  //   const userRef = collection(this.firestore, 'UserProfile');
  //   return collectionData(userRef, { idField: 'id'}) as Observable<SignIn[]>;
  // }
}
