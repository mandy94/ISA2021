import { Injectable } from '@angular/core';
import { ApiService } from '..';
import { ConfigService } from '../config.service';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private apiService: ApiService,
    private configService: ConfigService
  ) { }
 
  getAll(){
    return this.apiService.get(this.configService.get_all_admins());
  }
  
}
