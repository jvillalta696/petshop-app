import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Pet}from '../../Interfaces/pet'

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private firestore: Firestore) { }

  addPet(pet: Pet) {
    const petRef = collection(this.firestore, 'PetAdopter');
    return addDoc(petRef, pet);
  }

  getPets(): Observable<Pet[]> {
    const petRef = collection(this.firestore, 'PetAdopter');
    return collectionData(petRef, { idField: 'id' }) as Observable<
      Pet[]
    >;
  }

  deletePets(id: string) {
    const petRef = doc(this.firestore, `PetAdopter/${id}`);
    return deleteDoc(petRef);
  }

  updatePets(id: string, pet:any) {
    const petRef = doc(this.firestore, `PetShopItems/${id}`);
    return updateDoc(petRef,pet);
  }
}


