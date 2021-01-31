import { Injectable } from '@angular/core';
import { Period } from 'app/shared/models/Period';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TimePickerService {
 
FORMAT ='hh:mm';
  halfTimeList = [ { start :'08:00', end: '08:30'}, 
  { start :'08:30', end: '09:00'}, 
  { start :'09:00', end: '09:30'},
  { start :'09:30', end: '10:00'},
  { start :'10:00', end: '10:30'},
  { start :'10:30', end: '11:00'},
  { start :'11:00', end: '11:30'},
  { start :'11:30', end: '12:00'},
  { start :'12:00', end: '12:30'},
  { start :'12:30', end: '13:00'},
  { start :'13:00', end: '13:30'},
  { start :'13:30', end: '14:00'},
  { start :'14:00', end: '14:30'},
  { start :'14:30', end: '15:00'},
  { start :'15:00', end: '15:30'},
  { start :'15:30', end: '16:00'},
  { start :'16:00', end: '16:30'},
  { start :'16:30', end: '17:00'},
  { start :'17:00', end: '17:30'},
  { start :'17:30', end: '18:00'},
  { start :'18:00', end: '18:30'},
  { start :'18:30', end: '19:00'},
  { start :'19:00', end: '19:30'},
  { start :'19:30', end: '20:00'},
  { start :'20:00', end: '20:30'},
  { start :'20:30', end: '21:00'}]
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
   getTimeListInInterval(period: Period){
     let ret = []
     this.halfTimeList.forEach(el=>{
       if( moment(el.start, this.FORMAT).isBetween(moment(period.start, this.FORMAT), moment(period.end, this.FORMAT),undefined, '[]') &&
       moment(el.start, this.FORMAT).isBetween(moment(period.start, this.FORMAT), moment(period.end, this.FORMAT),undefined, '[)')){
         ret.push(el);
        }
      });
      console.log(ret);
     return ret;
   }
   
   getTimeListInIntervalAndExcludeAppointments(period: any, scheduledAppointments: any): any[] {
    let ret = []
    this.halfTimeList.forEach(el=>{
      if( moment(el.start, this.FORMAT).isBetween(moment(period.start, this.FORMAT), moment(period.end, this.FORMAT),undefined, '[]') &&
         moment(el.start, this.FORMAT).isBetween(moment(period.start, this.FORMAT), moment(period.end, this.FORMAT),undefined, '[)')){
           if(!this.notInAppointmentList(el,scheduledAppointments )){
              el["disabled"] = true;
            }else
              el["disabled"]= false;

          ret.push(el);
       }
     });
     console.log(ret);
    return ret;
  }
  notInAppointmentList(period: { start: string; end: string; }, scheduledAppointments: any) {
    let contains = true
    scheduledAppointments.forEach(el => {
      if(el.startTime == period.start || el.endTime == period.end)
      {
        contains = false;
      }
    });
    return contains;
  }
  
}
