import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { ApiService } from '../api.service';
import { DermatologService } from './dermatolog.service';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {
  

  constructor( private apiService: ApiService,
    private configService : ConfigService) { }
  getAll(){}
  getById(id: number){
    return null;
  }
  
  getByPharmacyId( id:number){
    return null;
  }
  getReservedConsultationsByUserId(id:number){
    return this.apiService.get(this.configService.get_reserved_consultations_by_user(id));
  }
  makeReservationForVisit(requestData ){  
    return this.apiService.post(this.configService.make_reservation_for_consultation(), requestData );
  }
  
}
