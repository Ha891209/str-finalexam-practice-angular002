import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  serverAddress = 'https://nettuts.hu/jms/Ha891209/customers';

  constructor(private http: HttpClient) { }


  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.serverAddress);
  }

  get(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.serverAddress}/${id}`);
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.serverAddress, customer);
  }

  update(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${this.serverAddress}/${customer.id}`, customer);
  }

  delete(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${this.serverAddress}/${id}`);
  }

}
