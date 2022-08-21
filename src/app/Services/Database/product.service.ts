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
import {Product}from '../../Interfaces/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: Firestore) { }

  addProduct(producto: Product) {
    const productRef = collection(this.firestore, 'PetShopItems');
    return addDoc(productRef, producto);
  }

  getProducts(): Observable<Product[]> {
    const productRef = collection(this.firestore, 'PetShopItems');
    return collectionData(productRef, { idField: 'id' }) as Observable<
      Product[]
    >;
  }

  deleteProducts(id: string) {
    const productRef = doc(this.firestore, `PetShopItems/${id}`);
    return deleteDoc(productRef);
  }

  updateProducts(id: string, product:any) {
    const productRef = doc(this.firestore, `PetShopItems/${id}`);
    return updateDoc(productRef,product);
  }
}
