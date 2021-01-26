import { Injectable } from '@angular/core';
import { ApiService } from '..';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class DermatologService {
  
  constructor(
    private apiService: ApiService,
    private configService: ConfigService
  ) { }
 
  getAll(){
    return this.apiService.get(this.configService.get_all_dermatologs());
  }
  getById(id:number){
    return this.apiService.get( this.configService.get_dermatologs_by_id(id));
  }
  getByPharmacyId(id: number){
    return this.apiService.get( this.configService.get_dermatologs_by_pharmacy_id(id));
  }
  getWorkingTimeAtPharmacy(dermatolog: number, pharmacy: number){
    return this.apiService.get( this.configService.get_workingtime_for_dermatolog_in_phamracy(dermatolog, pharmacy));
  }

}
