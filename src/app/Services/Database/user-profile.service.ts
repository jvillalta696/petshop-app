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
import { UserAuthService } from '../user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  id?: string;
  public currentUser?:UserProfile
  constructor(
    private firestore: Firestore,
    private auth: UserAuthService,) { 
    this.id = auth.getCurrentUser()?.uid;
    this.getUserProfile(this.id).subscribe((user)=>{
      this.currentUser = user
    })
  }

  getUserProfile(id?:string):Observable<UserProfile>{
    const userProfileRef = doc(this.firestore, `UserProfile/${id}`);
    return docData(userProfileRef,{idField:'id' }) as Observable<UserProfile>
  }
  
  updateUserProfile(currentUser:any,id?: string, ) {
    const productRef = doc(this.firestore, `UserProfile/${id}`);
    return updateDoc(productRef,currentUser);
  }
}
