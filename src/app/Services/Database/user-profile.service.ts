import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
  updateDoc,
  docData
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {UserProfile }from '../../Interfaces/user-profile'

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private firestore: Firestore) {     
  }

  getUserProfile(id?:string):Observable<UserProfile>{
    const userProfileRef = doc(this.firestore, `UserProfile/${id}`);
    return docData(userProfileRef,{idField:'id' }) as Observable<UserProfile>
  }
}
