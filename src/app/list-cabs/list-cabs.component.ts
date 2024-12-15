import { Component, OnInit } from '@angular/core';
import { Car, AvailabilityStatus } from '../model/car.model';
import { CarService } from '../services/car.service';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-cabs',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './list-cabs.component.html',
  styleUrl: './list-cabs.component.css',
})
export class ListCabsComponent {
  cars: Car[] = []; // Array to hold the list of cars

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  // Fetch all cars from the server
  fetchCars(): void {
    this.carService.fetchCars().subscribe((cars) => {
      this.cars = cars;
      console.log('Fetched Cars:', cars); // Debugging log
    });
  }
}
