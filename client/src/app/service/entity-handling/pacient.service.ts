import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientService {
  pacients = []
  constructor() { }
  getAll(){
    return this.pacients;
  }
}
