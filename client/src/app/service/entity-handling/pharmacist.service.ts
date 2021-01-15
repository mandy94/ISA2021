import { Injectable } from '@angular/core';
import { DermatologService } from './dermatolog.service';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {
  
  pharmacist =  [
    { id: 1, name: 'Dragan', rating: 4.5, surname: 'Kovalski', pharmacyid: 1 ,type:'Farmaceut', profilePic :'assets/image/milan.png'},
    { id: 2 ,name: 'Jelena', rating: 3.5, surname: 'Jovic', pharmacyid:2, type:'Farmaceut', profilePic :'assets/image/jovan.png'},
  ]
  constructor() { }
  getAll(){}
  getById(id: number){
    return this.pharmacist.find( el => { return el.id === id});
  }
  
  getByPharmacyId( id:number){
    return this.pharmacist.filter(element => { return element.pharmacyid === id});
  }
  makeReservationForVisit(pharmacistId, userId , pickedDate, pickedTimes ){  
    
  }
  
}
