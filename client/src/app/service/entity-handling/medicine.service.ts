import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  items = [
    { name: 'Andol', dose: 2, rating: 1, id: 1 ,type:'tableta'},
    { name: 'Brufen', dose: 2, rating: 5, id: 2 ,type:'sirup'},
    { name: 'Febricet', dose: 2, rating: 2, id: 3 ,type:'tableta'},
    { name: 'Tritiko', dose: 2, rating: 3, id: 4,type:'pilula' },
    { name: 'Borodual', dose: 2, rating: 1, id: 5,type:'tableta'}
  ]

  constructor() { }
  
  getByPharmacyId( id: number){
   return this.items; 
  }
}
