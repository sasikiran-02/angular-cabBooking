import { Injectable } from '@angular/core';
import { BookingRequest } from '../model/bookingrequest.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class BookcabService {
  private apiUrl = `${environment.host}/bookings`;
  constructor(private http: HttpClient) {}
  createBooking(bookingRequest: BookingRequest): Observable<any> {
    return this.http.post(this.apiUrl, bookingRequest, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
