import { parseFromMoment } from "app/shared/utilities/date-and-time.utils"

export class AppointmentDTO{
    id: number
    name: string
    price: number
    dermatologid: number
    dermatolog_fullname:string
    pacientid: number
    pacient_fullname: string
    time: string
    date:string
    status: string
   
}
export class Appointment{
    id: number
    name: string
    price: number
    dermatolog : any
    pacient:any    
    time: { start: string, end: string }
    date:string
    status: string
    constructor( groupForm){
        this.name = groupForm['name'];
        this.price = groupForm['price'];
        this.dermatolog = groupForm['dermatolog'];
        this.pacient = groupForm['dermatolog'];
        this.time = { 
            start: returnFormatedTime(groupForm['startHours'], groupForm['startMinuts']),
            end : returnFormatedTime(groupForm['endHours'], groupForm['endMinuts'])
        }
        this.date = groupForm['date'].toLocaleDateString();
    }
}

function returnFormatedTime( hours, minuts){
    return hours + ":" + minuts;
}