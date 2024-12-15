import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-cab',
  standalone: true,
  imports: [FormsModule, DatePipe, CommonModule],
  templateUrl: './search-cab.component.html',
  styleUrl: './search-cab.component.css',
})
export class SearchCabComponent {
  cars: Car[] = [];
  filteredCars: Car[] = [];
  searchTerm: string = '';

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.carService.fetchCars().subscribe(
      (cars) => {
        this.cars = cars;
        this.filteredCars = cars; // Initially show all cars
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }

  onSearch(): void {
    this.filteredCars = this.cars.filter(
      (car) =>
        car.model.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        car.licensePlate.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
