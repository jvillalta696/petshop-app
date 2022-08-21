import { Pet } from "./pet";
import { Product } from "./product";

export interface UserProfile { 
    birthday:string,
    email:string,
    fullName:string,
    listPetAdoptions?:any[],
    listPetItems?:any[],
}

