import {Injectable} from '@angular/core';
import { Period } from 'app/shared/models/Period';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
 
 
  private _api_url = 'http://localhost:8081/api';
  private _auth_url = 'http://localhost:8081/auth';
  private _user_url = this._api_url + '/user';

  private _refresh_token_url = this._api_url + '/refresh';
  

  get refresh_token_url(): string {
    return this._refresh_token_url;
  }

  private _login_url = this._auth_url + '/login';

  get login_url(): string {
    return this._login_url;
  }

  private _change_password_url = this._auth_url + '/change-password';

  get change_password_url(): string {
    return this._change_password_url;
  }

  private _whoami_url = this._api_url + '/whoami';

  get whoami_url(): string {
    return this._whoami_url;
  }
  get user_work_role():string{
    return this._api_url + '/user/workrole';
  }

  private _users_url = this._user_url + '/all';

  get users_url(): string {
    return this._users_url;
  }

  private _foo_url = this._api_url + '/foo';

  get foo_url(): string {
    return this._foo_url;
  }

  private _signup_url = this._auth_url + '/signup';

  get signup_url(): string {
    return this._signup_url;
  }

  
  private _medicine_all_url = this._api_url + '/medicine/all';

  get medicine_all_url(): string {
    return this._medicine_all_url;
  }

  private _orders_all_url = this._api_url + '/orders';

  get orders_all_url(): string {
    return this._orders_all_url;
  }

  
  private _get_orders_offers_url = this._api_url + '/orders/';

  get_orders_offers_url(orderId: number): string {
    return this._get_orders_offers_url + orderId + '/offers';
  }

  private _orders_create = this._api_url + '/orders';

  get orders_create(): string {
    return this._orders_create;
  }

  
  get_orders_accept_offer_url(orderId: number): string {
    return this._api_url + '/orders' + orderId; 
  }

  get_orders_generate_offers_url(orderId: number): string {
    return this._api_url + '/orders' + orderId + '/generate-offers';
  }


  // PHARMACY CONTROLLER
  get _pharmacy_all_url(): string{
    return this._api_url + '/pharmacy/all'; 
  }
  get_all_pharmacies():string {
    return this._api_url + '/pharmacy/all'; 
  }
  get_pharmacies_withouth_admins(): string {
    return this._api_url + '/pharmacy/without/admin'; 
  }
 
  get_pharmacy_by_id_url( id: number): string{
    return this._api_url + '/pharmacy/' + id; 
  }
  get_dermatologs_by_pharmacy_id(id: number) : string{
    return this._api_url + '/pharmacy/' + id + '/dermatologs/all';
  }
  get_pharmacists_by_pharmacy_id(id: number): string{
    return this._api_url + '/pharmacy/' + id + '/pharmacists/all';    
  }
  get_pharmacies_by_available_pharmacist_on_date_and_time(): string{
    return this._api_url + '/pharmacy/available';
  }
  get_available_pharmacist_in_pharmacy(id : number): string{
    return this._api_url + '/pharmacy/' + id + '/available/pharmacists';
  }
  get _add_new_pharmacy(): string{
    return this._api_url + '/pharmacy/add'; 
  }
  delete_pharamcy_by_id(id):string{
    return this._api_url +'/pharmacy/delete/' +id ;
  }

  // APPOINTMENT CONTROLLER
  get_history_appointments_at_dermatolog_for_pacient(id: number):string{
    return this._api_url + '/appointments/user/' + id + '/dermatolog/history';
  }
  get_reservation_appointments_at_dermatolog_for_pacient(id: number):string{
    return this._api_url + '/appointments/user/' + id + '/dermatolog/reservation';
  }
  get_available_appointments_at_dermatolog(id: number):string{
    return this._api_url + '/appointments/dermatolog/' + id + '/available';
    
  }
  get_available_appointments_at_dermatolog_for_pharmacy(id: number):string{
    return this._api_url + '/appointments/dermatolog/pharmacy/' + id + '/available';    
  }
  get_reserved_consultation_for_pacient(id: number): string{
      return this._api_url + '/appointments/user/' + id+ '/pharmacist/reservation';
      
  }
  get_history_consultation_for_pacient(id: number): string{
    return this._api_url + '/appointments/user/' + id+ '/pharmacist/history';
  }
  
  // PHARMACIST CONTROLLER
  get_all_pharmacists(): string {
    return this._api_url + '/pharmacist/all';
  }
  get_available_pharmacist_on_date_and_time(): string {
    throw new Error('Method not implemented.');
  }
  
  get_reserved_consultations_by_user(id :number): string{
    return this._api_url + '/pharmacist/user/' + id; 
  }
  make_reservation_for_consultation(): string {
   return this._api_url + '/pharmacist/create/reservation';
  }
  cancel_consultation(id: number): string {
    return this._api_url + '/pharmacist/cancel/reservation/' + id;
  
  }
  delete_pharamcist_by_id(id):string{
    return this._api_url +'/pharmacist/delete/' +id ;
  }
  // DERMATOLOG CONTROLLER
  get_all_dermatologs(): string {
    return this._api_url + '/dermatolog/all';
  }
 
  get_dermatologs_by_id(id:number):string{
    throw new Error('Method not implemented.');
  }
  get_workingtime_for_dermatolog(id: number):string{
    return this._api_url + '/dermatolog/' + id +'/business-hours';
  }
  get_workingtime_for_dermatolog_in_phamracy(dermatolog: number, pharacy:number):string{
    return this._api_url + '/dermatolog/' + dermatolog + '/pharmacy/' + pharacy +'/business-hours';
  }
  delete_dermatolog_by_id(id):string{
    return this._api_url +'/dermatolog/delete/' +id ;
  }
  // ADMIN CONTROLLER
  get_all_admins(): string {
   return this._api_url + '/admin/all';
  }
  get _add_new_admin() :string{
    return this._api_url + '/admin/add';
  }
  get_withouth_pharmacy(){
    return this._api_url +'/admin/withouth/pharmacy';
  }
  delete_admin_by_id(id):string{
    return this._api_url +'/admin/delete/' +id ;
  }
 
  
  // MEDICATIONA CONTROLLER
  get_all_registed_medication(): string{
    return this._api_url +'/medication/all';
  }
  get_all_medication_by_pharmacy_id(id: number): string {
    return this._api_url +'/medication/pharmacy/' +id;
  }
  get_all_manufacturers(): string {
    return this._api_url +'/medication/manufacturers/all';
  }
  get_all_ingrigients(): string {
    return this._api_url +'/medication/ingridients/all';
  }
   get_all_discounts(): string {
    return this._api_url +'/medication/discounts/all';
  }
 
 
  
  add_new_medicine(): string {
    return this._api_url +'/medication/create';
  }
  delete_medication_by_id(id: any): string {
    return this._api_url +'/medication/delete/' +id;
  }

}
