import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DermatologService {
  dermatologs = [
    {
      id: 2874,
      name: 'Mita',
      birthdate: '12.3.1980',
      adress: 'Bul. Oslobodjenja 120, Novi Sad',
      pharmacyid: 1, profilePic :'assets/image/jovan.png',
      workingTime: [
        {
          day: 'Ponedeljak',
          time: { start: '8:00', end: '10:00' }
        },
        {
          day: 'Utorak',
          time: { start: '8:00', end: '10:00' }
        },
        { day: 'Sreda' },
        { day: 'Cetvrtak' },
        { day: 'Petak' },
        { day: 'Subota' },
        { day: 'Nedelja' }
      ],
      vacation: {
        startDate: '20.07.2020',
        endDate: '10.08.2020',
      }
    },
    {
      id: 2876,
      name: 'Jova',
      pharmacyid:1, profilePic :'assets/image/milan.png',
      workingTime: [
        {
          day: 'Ponedeljak',
          time: { start: '8:00', end: '10:00' }
        },
        { day: 'Utorak' },
        {
          day: 'Sreda',
          time: { start: '8:00', end: '10:00' }
        }, { day: 'Cetvrtak' },
        { day: 'Petak' },
        { day: 'Subota' },
        { day: 'Nedelja' }
      ],
      scheduledAppointments: [
        {
          date: '10.12.2020.',
          time: '12:00',
          pacient: 'Milan'
        }
      ]
    }, {
      id: 2878,
      name: 'Dragana',
      pharmacyid:2,profilePic :'assets/image/mila.jpg',
      workingTime: [
        { day: 'Ponedeljak' },
        {
          day: 'Utorak',
          time: { start: '8:00', end: '10:00' }
        }, {
          day: 'Cetvrtak',
          time: { start: '8:00', end: '10:00' }
        },
        { day: 'Sreda' },
        { day: 'Petak' },
        { day: 'Subota' },
        { day: 'Nedelja' }
      ]

    }
  ]
  constructor() { }
  getAll(){
    return this.dermatologs;
  }
  getById(id:number){
    return this.dermatologs.find(element => { return element.id === id});
  }
  getByPharmacyId(id: number){
   return this.dermatologs.filter(element => { return element.pharmacyid === id});
  }
}
