import { Injectable } from '@angular/core';
import { ConfigService } from '..';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  constructor(
    private apiService: ApiService,
    private configService: ConfigService
  ) { }

  getShapes(): any {
    return ['Prasak za oralnu suspenziju', 'Prašak za suspenziju za injekciju', 'Rastvor za injekciju', 'Rastvor za infuziju', 'Sirup', 'Mast za oči', 'Tableta']
  }
  getTypes(): any {
    return ['Cefaleksin', 'Diazepan', 'Flumazenil', 'Glukoza', 'Hloropiramin', 'Irinotekan', 'Kvinapril', 'Paracetamol', 'Tirotricin']
  }
  getSideEffects() {
    return ['Teške insuficijencije jetre', 'Teške insuficijencije  bubrega', 'Grčevi', 'Abdominalni bol', 'Dijareju i krvavu stolicu',
      'Groznica', 'Glavobolja', 'Osip']
  }
  getIngiridents(): any {
    return this.apiService.get(this.configService.get_all_ingrigients());
  }
  getManufacturers(): any {
    return this.apiService.get(this.configService.get_all_manufacturers());
  }
  getDiscounts() {
    return this.apiService.get(this.configService.get_all_discounts());
  }

  getAllRegisteredMeds() {
    return this.apiService.get(this.configService.get_all_registed_medication());
  }
  getAllByPharamcyId(id: number) {
    return this.apiService.get(this.configService.get_all_medication_by_pharmacy_id(id));
  }
  addNewMedication(newMed: any): any {
    return this.apiService.post(this.configService.add_new_medicine(), newMed);
  }
  deleteMedication(id) {
    return this.apiService.delete(this.configService.delete_medication_by_id(id));
  }
}
