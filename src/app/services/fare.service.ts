import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FareCalculatorService {
  private apiUrl = 'http://localhost:8081/calculate'; // URL of your backend API

  constructor(private http: HttpClient) {}

  /**
   * Fetches the fare for a specific booking from the backend using bookingId.
   * @param bookingId - The booking ID
   * @returns Observable containing the fare
   */
  getFare(bookingId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${bookingId}`);
  }
}
