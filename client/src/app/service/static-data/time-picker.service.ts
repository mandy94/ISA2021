import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimePickerService {

  timeList = [ { start :'08:00', end: '09:00'}, 
  { start :'09:00', end: '10:00'},
  { start :'10:00', end: '11:00'},
  { start :'11:00', end: '12:00'},
  { start :'12:00', end: '13:00'},
  { start :'13:00', end: '14:00'},
  { start :'14:00', end: '15:00'},
  { start :'15:00', end: '16:00'},
  { start :'16:00', end: '17:00'},
  { start :'17:00', end: '18:00'},
  { start :'18:00', end: '19:00'},
  { start :'19:00', end: '20:00'},
  { start :'20:00', end: '21:00'},]
  constructor() { }
   getTimeListByH(){
    return this.timeList;
   }
}
