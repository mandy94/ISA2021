import {Injectable, Injector} from '@angular/core';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import {map} from 'rxjs/operators';
import { CURRENT_USER, StateStorageService } from './state-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getMyPharacyID(): number {
    return null;
  }

  currentUser;
  private stateStorage: StateStorageService;

  constructor(private injector: Injector,
    
    private apiService: ApiService,
    private config: ConfigService
  ) {
    this.stateStorage = injector.get(StateStorageService);
  }

  initUser() {
    const promise = this.apiService.get(this.config.refresh_token_url).toPromise()
      .then(res => {
        if (res.access_token !== null) {
          return this.getMyInfo().toPromise()
            .then(user => {
              this.stateStorage.store(CURRENT_USER, user);
              this.currentUser = user;
            });
        }
      })
      .catch(() => null);
    return promise;
  }
  checkRole(role){
    if(this.currentUser != null){      
      if( this.currentUser.work_role == role)
      return true;
    }
    return false;    
  }
  amIAdmin(){    
    return this.checkRole("Admin");
  }
  
  amIUser(){
    return this.checkRole("Pacient");
  }
  amISuperAdmin(){
    return this.checkRole("Superadmin");
  }
  amIDermatolog(){
    return this.checkRole("Dermatolog");
  }
  amIPharmacolog(){
    return this.checkRole("Farmaceut");
  }

  getMyId() {
    return this.apiService.get(this.config.whoami_url)
      .pipe(map(user => {
        this.currentUser = user;        
        return user.id;
      }));
  }

  setupUser(user) {
    this.currentUser = user;
  }

  getMyInfo() {
    return this.apiService.get(this.config.whoami_url)
      .pipe(map(user => {
        this.currentUser = user;        
        this.stateStorage.store(CURRENT_USER, user);
        return user;
      }));
  }

  getAll() {
    return this.apiService.get(this.config.users_url);
  }

}
