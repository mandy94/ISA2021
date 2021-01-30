import { Injectable } from '@angular/core';
import { ApiService, ConfigService } from '..';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
 

  constructor(   private config: ConfigService,
    private apiService: ApiService) { }
  
  getByPharmacyId( id: number){
   return this.apiService.get(this.config.get_all_medication_by_pharmacy_id(id)); 
  }
}
