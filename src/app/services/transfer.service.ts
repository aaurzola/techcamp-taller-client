import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from '../models/transfer';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = 'http://localhost:8083/api/v1/techcamp/transferLog'

  getAlltransferLog(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.apiURL);
  }
}
