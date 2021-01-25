import { Injectable } from "@angular/core";

export const TOKEN_PAYLOAD = 'tokenPayload';
export const TOKEN = 'token';

@Injectable({
    providedIn: 'root'
})
export class StateStorageService {

    store(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    retrieve(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }
}
