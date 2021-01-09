import { Injectable } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { DermatologService } from './dermatolog.service';
import { MedicineService } from './medicine.service';
import { PharmacistService } from './pharmacist.service';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {


  pharmacyList = [
    {
      id: 1,
      name: 'Apoteka dobro srce',
      adress: 'Radnicka 23, Novi Sad',
      description: 'Neki opis apoteke',

    },
    { id: 2, name: 'Therapy Signs', rating: 3 },
    { id: 3, name: 'Therapy Aloe', rating: 4 },
    { id: 4, name: 'Medicinecy', rating: 1 },
    { id: 5, name: 'Choice Medication', rating: 2 },
    { id: 6, name: 'We Medication', rating: 5 },
    { id: 7, name: 'Pharmacyous', rating: 5 },
    { id: 8, name: 'Medical All', rating: 2 },
    { id: 9, name: 'Medicine Hop', rating: 1 },
    { id: 10, name: 'Medicine Alcove', rating: 1 }];


  constructor(private dermatologs: DermatologService,
    private pharmacists: PharmacistService,
    private medications: MedicineService) { }
  getAll() {
    return this.pharmacyList;
  }
  getById(id: number) {
    return this.pharmacyList.find(element => { return element.id === id });
  }
  getAllEmplyeesByPharmacyId(id: number): any {
    let dermatologsList = this.dermatologs.getByPharmacyId(id);
    let pharmacistList = this.pharmacists.getByPharmacyId(id);
    pharmacistList.forEach(element => { dermatologsList.push(element) });
    return dermatologsList;
  }
  getAvailableMedications(id: number): any {
    return this.medications.getByPharmacyId(id);
  }
}
