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
  // getPrescriptionsByPacientIdForSearch(id: any) {    
  //   return this.apiService.get(this.config.get_prescription_by_pacient_id(id));      
  // }
  seperatePrescrptionsByMedicines(inputData){   
    
    let outputList = [];
    inputData.forEach(el => {
        let temp = {
          id: el.id,
          code: el.code,
          pacient: el.pacient,
          date: el.date,
          medicine: {}
        };
        el.itemMedicine.forEach(med => {
          temp.medicine = med;             // smesta ga u medicine.medicine propery. It's a bug.
          outputList.push(JSON.parse(JSON.stringify(temp))); 
        });
      });   
    return outputList;
  }
  getPrescriptionsForMeForSearch() {    
    let id;
    id = this.userService.currentUser.id;
    if(id){
      this.userService.getMyInfo();
    }
    return this.apiService.get(this.config.get_prescription_by_pacient_id(id));      
  }
  
}
