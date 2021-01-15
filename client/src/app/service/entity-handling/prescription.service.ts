import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  allPrescriptionsForUser1 = [
    {
      code: 2352,
      pacient: { name: '', surname: '' },
      status: 'Nov',
      date: '01.02.2021',
      medication: {
        id: 1,
        name: 'Andol',
        dosage: '150mg',
        amount: 2
      }
    }, {
      code: 2452,
      pacient: { name: '', surname: '' },
      status: 'Obradjen',
      date: '05.02.2021',
      medication: {
        id: 2,
        name: 'Brufen',
        dosage: '180mg',
        amount: 2
      }
    },
    {
      code: 2152,
      pacient: { name: '', surname: '' },
      status: 'Obradjen',
      date: '03.02.2021',
      medication: {
        id: 10,
        name: 'Bromazepan',
        dosage: '300mg',
        amount: 1
      }
    }];
 
  constructor() { }
  getPrescriptionsForUserID(id: number){
    return this.allPrescriptionsForUser1;
  }
}
