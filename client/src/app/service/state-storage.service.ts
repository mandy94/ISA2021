import { Injectable } from "@angular/core";

export const TOKEN_PAYLOAD = 'tokenPayload';
export const TOKEN = 'token';

@Injectable({
    providedIn: 'root'
})
export class StateStorageService {

    store(key: string, value: any) {
        if (typeof value === 'string') {
            localStorage.setItem(key, JSON.stringify(value));
            
            return;
        }
    }

    retrieve(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }
}
