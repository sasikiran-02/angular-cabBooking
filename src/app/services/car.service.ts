import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Car } from '../model/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}
  fetchCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.host}/cars`);
  }
}
