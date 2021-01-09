import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DermatologService {
  dermatologs =  [
    { id: 1, name: 'Jovan', surname: 'Kovalski', pharmacyid: 1, type:'Dermatolog', profilePic :'assets/image/jovan.png'},
    { id: 2 ,name: 'Mila', surname: 'Jovic', pharmacyid:1, type:'Dermatolog',profilePic :'assets/image/mila.jpg'},
    { id: 3 ,name: 'Milan', surname: 'Jovic', pharmacyid:2, type:'Dermatolog',profilePic :'assets/image/milan.png'},
  ]
  constructor() { }
  getAll(){
    return this.dermatologs;
  }
  getById(id:number){
    return this.dermatologs.filter(element => { return element.id === id});
  }
  getByPharmacyId(id: number){
   return this.dermatologs.filter(element => { return element.pharmacyid === id});
  }
}
