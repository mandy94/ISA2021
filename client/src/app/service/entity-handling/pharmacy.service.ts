import { Injectable } from '@angular/core';
import { Period } from 'app/shared/models/Period';
import { parseFromMoment } from 'app/shared/utilities/date-and-time.utils';
import { Moment } from 'moment';
import { ApiService } from '../api.service';
import { ConfigService } from '../config.service';

import { DermatologService } from './dermatolog.service';
import { MedicineService } from './medicine.service';
import { PharmacistService } from './pharmacist.service';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  //shared data
  pickedTime : Period;
  pickedDate;

  constructor(private dermatologs: DermatologService,
    private config: ConfigService,
    private apiService: ApiService,
    private medications: MedicineService) { }
  storeData( time : Period, date : string){
    this.pickedTime = time;
    this.pickedDate = date;
  }
  getAll() {
    return this.apiService.get(this.config._pharmacy_all_url);
  }

  getById(id: number) {
    return this.apiService.get(this.config.get_pharmacy_by_id_url(id));
  }
 
  getDermatologsByPharmacyId(id: number): any {
    return this.apiService.get(this.config.get_dermatologs_by_pharmacy_id(id));
  }
  getPharmacistsByPharmacyId(id: number): any {    
    return this.apiService.get(this.config.get_pharmacists_by_pharmacy_id(id));
  }
  getPharmaciesByAvailablePharamcistsOnDateAndTime(date: Moment, time: Period){
    return this.apiService.post(this.config.get_pharmacies_by_available_pharmacist_on_date_and_time(), 
            {
              date: date.toLocaleString(), 
              start : time.start, 
              end: time.end});
}
  getByAvailablePharacistInPharmacy(id: number){
        let date = this.pickedDate;
        let time = this.pickedTime;
        return this.apiService.post(this.config.get_available_pharmacist_in_pharmacy(id),
                {
                  date: date,
                  start : time.start,
                  end: time.end});
  }
  getAvailableMedications(id: number): any {
    return this.medications.getByPharmacyId(id);
  }
}
