import { Injectable } from '@angular/core';
import { Booking } from '../model/booking.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient) {}
  fetchBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${environment.host}/bookings`);
  }
}
