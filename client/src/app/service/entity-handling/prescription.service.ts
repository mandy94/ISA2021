import { Injectable } from '@angular/core';
import { ApiService, ConfigService, UserService } from '..';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {


  constructor(private config: ConfigService,
    private userService: UserService,
    private apiService: ApiService) { }

  getPrescriptionsByPacientId(id: number) {
    return this.apiService.get(this.config.get_prescription_by_pacient_id(id));
  }
  getPrescriptionsByPacientIdForSearch(id: any) {
   
    return this.apiService.get(this.config.get_prescription_by_pacient_id(id));      
  }
  
}
