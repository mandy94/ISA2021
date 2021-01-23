import { Injectable } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { AppointmentDTO } from 'app/shared/models/entitis/appointment.model';
import { ApiService } from '../api.service';
import { ConfigService } from '../config.service';
import { PharmacistService } from './pharmacist.service';

@Injectable({
  providedIn: 'root'
})
export class VisitsAndAppointmentsService {

  nextId = 4;
  constructor(private pharmacistService: PharmacistService,
    private apiService: ApiService,
    private configService: ConfigService
  ) { }

  getReservedAppointmentsAtDermatologForPacient(id: number) {
    return this.apiService.get(this.configService.get_reservation_appointments_at_dermatolog_for_pacient(id));
  }
  getHistoryAppointmentsAtDermatologForPacient(id: number) {
    return this.apiService.get(this.configService.get_history_appointments_at_dermatolog_for_pacient(id));
  }

  getAvailableAppointmentsForPharmacy(id: number) {
    return this.apiService.get(this.configService.get_available_appointments_at_dermatolog_for_pharmacy(id));
  }

  getHistoryVisitsForPacient(id: number) {
    return this.apiService.get(this.configService.get_history_appointments_at_dermatolog_for_pacient(id));

  }

  getReservedAppointmentsForPacient(id: number) {
    return this.apiService.get(this.configService.get_reservation_appointments_at_dermatolog_for_pacient(id));
  }

  getReservedConsultationForPacient(id: any) {
    return this.apiService.get(this.configService.get_reserved_consultation_for_pacient(id));
  }
  getHistoryConsultationForPacient(id: any) {
    return this.apiService.get(this.configService.get_history_consultation_for_pacient(id));
  }

  cancelAppointmentWithPharmacist( id: number){
    return this.apiService.delete(this.configService.cancel_consultation(id));
  }

  addNewAppointment(item: any) {
    console.log(" to be contrinued");
  }
  makeReservationForTheAppointment(appointmentId, me) {
    /*let target = this.scheduledAppointments.find(
      element => element.id === appointmentId
    );
    target.status = 'Rezervisan';
    target.pacientid = me.id;
    target.pacient_fullname = me.firstName + " " + me.lastName;*/
    console.log(" to be contrinued 2");

  }
}
