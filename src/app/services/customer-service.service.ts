import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  apiURL = 'http://localhost:8083/api/v1/techcamp/'

  getClient(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiURL + 'customer');;
  }


}
