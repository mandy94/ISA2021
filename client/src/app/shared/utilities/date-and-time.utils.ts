import * as moment from 'moment';

export function parseToMoment(inputString : string){
    return moment(inputString, dateFormat);
}
export function parseFromMoment( inputMoment: moment.Moment ){
    return inputMoment.format(dateFormat);
}
export function isUnder24h( inputDate : string, inputTime = '00:00' ){
    let now = moment();    
    let inputString = inputDate + " " + inputTime;
    if(now.diff(moment(inputString, timeAnddateFormat), 'hours') <= -24) 
        return true;
    else
        return false;
}
export function isOver24h( inputDate : string, inputTime = '00:00' ){
    let now = moment();    
    let inputString = inputDate + " " + inputTime;
    if(now.diff(moment(inputString, timeAnddateFormat), 'hours') > -24) 
        return true;
    else
        return false;
}

export var dateFormat = 'DD/MM/YYYY';
export var timeAnddateFormat = 'DD/MM/YYYY HH:mm';