import { Injectable } from "@angular/core";

export const TOKEN_PAYLOAD = 'tokenPayload';
export const TOKEN = 'token';
export const CURRENT_USER = 'currentUser';

@Injectable({
    providedIn: 'root'
})
export class StateStorageService {

    store(key: string, value: any) {
        if (typeof value === 'string') {
            localStorage.setItem(key, value);
            return;
        }
        localStorage.setItem(key, JSON.stringify(value));
    }

    retrieve(key: string) {
        return localStorage.getItem(key);
    }

    
    retrieveObject(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }
}
