import { Injectable } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { AppointmentDTO } from 'app/shared/models/entitis/appointment.model';
import { PharmacistService } from './pharmacist.service';

@Injectable({
  providedIn: 'root'
})
export class VisitsAndAppointmentsService {
  scheduledAppointments = [
    {
      id: 1,
      pharmacyid: 1,
      name: 'Ultrazvuk',
      price: 3400,
      dermatologid: 1,
      dermatolog_fullname: 'dr. Mila Jovic',
      pacientid: 1,
      pacient_fullname: "Milan Paroski",
      time: { start: '10:00', end: '10:30' },
      date: "12/01/2021",
      status: 'Rezervisan'
    },
    {
      id: 2,
      pharmacyid: 1,
      name: 'Redovan pregled',
      price: 1000,
      dermatologid: 1,
      dermatolog_fullname: 'dr. Mila Jovic',
      pacientid: 1,
      pacient_fullname: "Milan Paroski",
      time: { start: '10:00', end: '10:30' },
      date: "14/01/2021",
      status: 'Rezervisan'
    } ,
    {
      id: 3,
      pharmacyid: 1,
      name: 'Opsti pregled',
      price: 1000,
      dermatologid: 2,
      dermatolog_fullname: 'dr. Ivan Tocilo',
      pacientid: undefined,
      pacient_fullname:undefined,
      time: { start: '10:00', end: '10:30' },
      date: "15/01/2021",
      status: 'Slobodan'
    }   
  ]
  visitHistoryList = [
    {
      id: 2,
      pharmacyid: 1,
      date: '06/01/2021',      
      dermatologid: 1,
      dermatolog_fullname: 'dr. Mila Jovic',
      pacientid: 1,
      pacient_fullname: "Milan Paroski",
      name: 'Redovna kontrola',
      time: { start: '10:00', end: '10:30' },
      price: 0,
      status: 'Realizovan'
    },
    {
      id: 3,
      pharmacyid: 1,
      date: '07/01/2021',    
      dermatologid: 1,
      dermatolog_fullname: 'dr. Mila Jovic',
      pacientid: 1,
      pacient_fullname: "Milan Paroski",
      name: 'Kratki pregled kicme 2 ',
      time: { start: '10:00', end: '10:30' },
      price: 0,
      status: 'Realizovan'
    }];

  nextId = 4;
constructor(private pharmacistService: PharmacistService) {}
addNewAppointment( item: any){
  item.id = this.nextId++; // imitiranje SUBP-a
  this.scheduledAppointments.push(item);
}


getAllAppointmentsForPharmacy( id: number){
  return this.scheduledAppointments;
}
getAllAppointmentsForDermatolog( id: number){
  return this.scheduledAppointments.filter( 
    element => element.dermatologid === id
    );
}
getMyReservationForPharmacy( id, myId){
  return this.scheduledAppointments.filter(
    element => element.pacientid === myId && element.pharmacyid ===id
  )
}
getAvailableAppointmentsForPharmacy( it : number){
  return this.scheduledAppointments.filter( 
    element => element.status === 'Slobodan');
}
getHistoryVisitsForPacient( id: number){
  return this.visitHistoryList.filter(
    element => element.pacientid === id 
  );
}
getScheduledAppointmentsForPacient(id: number){
  return this.scheduledAppointments.filter(
    element => element.pacientid === id  && element.status === 'Rezervisan'
  );
}

makeReservationForTheAppointment(appointmentId, me){
  let target = this.scheduledAppointments.find(
    element => element.id === appointmentId
  );
  target.status = 'Rezervisan';
  target.pacientid = me.id;
  target.pacient_fullname = me.firstName + " "+ me.lastName;  
  
  
}

}
